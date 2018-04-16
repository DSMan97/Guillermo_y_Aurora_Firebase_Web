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
      this.sTituloLogin="Register!"
  }
}
}
