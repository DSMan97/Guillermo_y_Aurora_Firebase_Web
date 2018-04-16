export default {
  name: 'login-registro',
  components: {},
  props: [],
  data () {
    return {
      blLoginVisible:true,
      sTituloLogin:"LOGIN"
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
      this.sTituloLogin="LOGIN"
  },
  // clickDeBotonRegistraseEnvio:function(event) {
  //   this.btnEnvioDatos=;
  // }
  clickDeBotonCancelar:function(event){
    //console.log("!!!!!!!!!!!!!!!!!!!");
    this.blLoginVisible=true;
    this.sTituloRegistro="Login!"
}
}
}
