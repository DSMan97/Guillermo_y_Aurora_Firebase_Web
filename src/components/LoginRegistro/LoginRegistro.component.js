import firebase from 'firebase'
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
clickDeBotonLogearseGoogle:function (event) {
  console.log("Entra en logueo de Google ");
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
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
    this.blLoginVisible=true;
      this.sTituloRegistro="Login!"
       firebase.auth().signOut()
    console.log("Entra ");



  },

  }
}
