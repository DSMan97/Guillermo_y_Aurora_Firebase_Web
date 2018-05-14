import firebase from 'firebase'
import firestore from 'firebase/firestore'
import { EventBus } from '../../Events/events_bus'
export default {
  name: 'login-registro',
  components: {},
  props: [],
  data () {
    return {
      blLoginVisible:true,
      sTituloLogin:"LOGIN",
      sRegisterEmail:"",
      sRegisterPass:"",
      sLoginEmail:"",
      sLoginPass:""
    }
  },
  created: function(){
      firebase.auth().onAuthStateChanged((user) => {

            if(user){
              this.props_blIsLoggedIn = true

            }
            else {
              this.props_blIsLoggedIn = false
            }
            EventBus.$emit('loginregistro_userstatechanged', this.props_blIsLoggedIn)
      });
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    clickDeBotonRegistrase:function(event){
      //console.log("!!!!!!!!!!!!!!!!!!!");
      this.blLoginVisible=false;
      this.sTituloLogin="LOGIN";
  },
 clickDeBotonRegistrarseAceptar:function(event) {

   firebase.auth().createUserWithEmailAndPassword(this.sRegisterEmail, this.sRegisterPass).then(function(user) {
     var docRef = firebase.firestore().collection("Perfiles")
     docRef.doc(user.uid+"").set({email: user.email})
  // Handle Errors here.
  alert("Te has Registrado correctamente");
  //var errorCode = error.code;
//  var errorMessage = error.message;
  // ...

})(function ( error){
    alert("No Te has Registrado correctamente");

  },
);

  },
  clickDeBotonCancelar:function(event){
    //console.log("!!!!!!!!!!!!!!!!!!!");
    this.blLoginVisible=true;
    this.sTituloRegistro="Login!"
},
clickDeBotonLogearseFacebook: function() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  var docRef = firebase.firestore().collection("Perfiles")
  docRef.doc(user.uid+"").set({email: user.email})
  alert("Bienvenido!! "+ user.email);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
FB.Event.subscribe('auth.authResponseChange', checkLoginState);
function checkLoginState(event) {
  if (event.authResponse) {
    // User is signed-in Facebook.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(event.authResponse, firebaseUser)) {
        // Build Firebase credential with the Facebook auth token.
        var credential = firebase.auth.FacebookAuthProvider.credential(
            event.authResponse.accessToken);
        // Sign in with the credential from the Facebook user.
        firebase.auth().signInWithCredential(credential).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        // User is already signed-in Firebase with the correct user.
      }
    });
  } else {
    // User is signed-out of Facebook.
    firebase.auth().signOut();
  }
}
function isUserEqual(facebookAuthResponse, firebaseUser) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
          providerData[i].uid === facebookAuthResponse.userID) {
        // We don't need to re-auth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}

},
clickDeBotonLogearseGoogle:function (event) {
  var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;

  var docRef = firebase.firestore().collection("Perfiles")
  docRef.doc(user.uid+"").set({email: user.email})
  alert("Bienvenido!! "+ user.email);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

},
clickDeBotonLogearse:function (event) {
  // this.blLogearseVisible=true;
  firebase.auth().signInWithEmailAndPassword(this.sLoginEmail, this.sLoginPass).then(function(user) {
    // Handle Errors here.
      alert("Te has Logueado correctamente");

      this.blLogearseVisible=false;

    // ...
  })(function (error){
      alert("No Te has Logueado correctamente");
      // var errorCode = error.code;
      // var errorMessage = error.message;
    },
  );

},
  logout: function(event){
    firebase.auth().signOut().then(function() {

 // Sign-out successful.
}).catch(function(error) {
 // An error happened.
});

  },

  }
}
