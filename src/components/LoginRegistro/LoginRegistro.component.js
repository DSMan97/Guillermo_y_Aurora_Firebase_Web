export default {
  name: 'login-registro',
  components: {},
  props: [],
  data () {
    return {
      blLoginVisible:true,
      sTituloLogin:"LOGIN",
      sEmail="g2@g2.com",
      sPass="123456"
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
      this.sTituloLogin="LOGIN"
  },
 clickDeBotonRegistraseAceptar:function(event) {
   firebase.auth().signInWithEmailAndPassword(this.sEmail, this.sPass).catch(function(error) {
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


}
}
}
