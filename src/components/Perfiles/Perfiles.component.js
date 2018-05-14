import { EventBus } from '../../Events/events_bus'
import firestore from 'firebase/firestore'
import firebase from 'firebase'

class imagenesRip {
  constructor(id, datos) {
    this.id = id
    this.name = datos.nombre
    this.img = datos.imagen
// console.console.log("NOMBRE:"+ this.name);
  }
}
export default {
  name: 'perfiles',
  components: {},
  props: [],
  data (id , datos) {
    return {
      rip: []

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
        this.descargarRip()
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
},

      descargarRip: function () {
        console.log("acaba fun perfiles");
        var that = this
        firebase.firestore().collection("rip").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          that.rip.push(new Rip(doc.id,doc.data()))
          console.console.log("NOMBRE:" + this.name);
      });
    });
        }
    }

}
