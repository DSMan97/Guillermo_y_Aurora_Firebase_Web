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
   alert(this.sRegisterEmail+"------------"+this.sRegisterPass);
   firebase.auth().createUserWithEmailAndPassword(this.sRegisterEmail, this.sRegisterPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
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
    alert(this.sRegisterEmail+"------------"+this.sRegisterPass);
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

}
}
}
