import firebase from 'firebase'
import firestore from 'firebase/firestore'
import paginaIntermedia from '@/components/paginaIntermedia'

import { EventBus } from '../../Events/events_bus'

export default {
  name: 'login-registro',
  components: {'paginaIntermedia' : paginaIntermedia},
  props: [],
  data () {
    return {
      blLoginVisible:true,
      sTituloLogin:"LOGIN",
      sRegisterEmail:"",
      sRegisterPass:"",
      sLoginEmail:"",
      sLoginPass:"",
      iAge:"",
      sNombre:"",
      sApellido:""

    }
  },
  created: function(){
    
      firebase.auth().onAuthStateChanged((user) => {
     var that = this
     this.props_objuser = user
     if(user){
       this.props_blIsLoggedIn = true
       var docRef = firebase.firestore().collection("Perfiles").doc(user.uid+"")
         docRef.get().then(function(doc) {
         if (doc.exists) {
           console.log("Document data:", doc.data());
           that.props_docPerfil = new Perfiles(doc.id, doc.data());


         } else {
           // doc.data() will be undefined in this case
           console.log("No existe ese documento");
         }
       }).catch(function(error) {
         console.log("Error getting document:", error);
       });
     }else {
       this.props_blIsLoggedIn = false
     }
     EventBus.$emit('loginregistro_userstatechanged',this.props_blIsLoggedIn)
   })
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
   var that=this
   firebase.auth().createUserWithEmailAndPassword(this.sRegisterEmail, this.sRegisterPass).then(function(user) {
     var docRef = firebase.firestore().collection("Perfiles")
     docRef.doc(user.uid+"").set({email: user.email, Nombre: that.sNombre, Apellido: that.sApellido, Edad: that.iAge})

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
