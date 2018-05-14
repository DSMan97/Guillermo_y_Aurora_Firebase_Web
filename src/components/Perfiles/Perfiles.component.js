import { EventBus } from '../../Events/events_bus'
import firestore from 'firebase/firestore'
import firebase from 'firebase'


class imagenesRip {
  constructor(id, datos) {
    this.id = id
    this.name = datos.nombre
    this.img = datos.imagen

console.log("NOMBRE:"+ this.name);
  }
}
class Perfiles {

  constructor(id, datos) {
    this.id = id
    this.name = datos.Nombre
    this.apellido = datos.Apellido
    this.edad = datos.Edad
    this.email = datos.email
    console.log("Entr perfiles", this.name )
  }
}
export default {
  name: 'Perfiles',
  components: {},
  props: [],
  data (id , datos) {
    return {
      rip: [] ,
      Perfiles: []

    }
  },
  created: function(){

  },
  computed: {

  },
  mounted () {
    EventBus.$on('loginregistro_userstatechanged', blestado => {
      //this.blLoggedUser=blestado
      if (blestado) {
        this.descargarPerfiles()
        this.descargarRip()
      }
    });
  },
  methods: {
    descargarPerfiles: function(){
      var that=this
      firebase.firestore().collection("Perfiles").onSnapshot(function(querySnapshot) {
          that.Perfiles = []
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        that.Perfiles.push(new Perfiles(doc.id,doc.data()))
    });
});
},

      descargarRip: function () {
        console.log("acaba fun perfiles");
        var that = this
        firebase.firestore().collection("rip").get().onSnapshot(function(querySnapshot) {
            that.rip = []
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          that.rip.push(new imagenesRip (doc.id,doc.data()))

      });
    });
        }
    }

}
