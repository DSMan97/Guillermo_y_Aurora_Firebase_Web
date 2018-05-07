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
      this.blLogearseVisible=false;
      this.sTituloLogin="LOGIN";
  },
 clickDeBotonRegistrarseAceptar:function(event) {

   firebase.auth().createUserWithEmailAndPassword(this.sRegisterEmail, this.sRegisterPass).catch(function(error) {
  // Handle Errors here.
  alert("No te has Registrado correctamente");
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
}).then(function (user){
    alert("Te has Registrado correctamente");
  },
);

  },
  clickDeBotonCancelar:function(event){
    //console.log("!!!!!!!!!!!!!!!!!!!");
    this.blLoginVisible=true;
    this.sTituloRegistro="Login!"
},
clickDeBotonLogearse:function (event) {
  this.blLogearseVisible=true;
  firebase.auth().signInWithEmailAndPassword(this.sLoginEmail, this.sLoginPass).catch(function(error) {
    // Handle Errors here.
      alert("No te has Logueado correctamente");
    var errorCode = error.code;
    var errorMessage = error.message;


    // ...
  }).then(function (user){
      alert("Te has Logueado correctamente");

    },
  );

}
}
}
