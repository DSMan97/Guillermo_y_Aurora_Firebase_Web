import { EventBus } from '../../Events/events_bus'
import firestore from 'firebase/firestore'
import firebase from 'firebase'
export default {
  name: 'perfiles',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  created: function(){

  },
  computed: {

  },
  mounted () {
    EventBus.$on('loginregistro_userstatechanged', blestado => {
      //this.blLoggedUser=blestado
      if (blestado==true) {
        this.descargarPerfiles()
      }
    });
  },
  methods: {
    descargarPerfiles: function () {
      firebase.firestore().collection("Perfiles").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
      }
    }

}
