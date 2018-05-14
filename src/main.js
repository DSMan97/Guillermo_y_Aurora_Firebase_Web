// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import props from './mixins/props'
import firestore from 'firebase/firestore'

Vue.config.productionTip = false

// var storage = firebase.storage();
// var storageRef = storage.ref();
// storageRef.child('images/stars.jpg').getDownloadURL().then(function(url) {
// var img = document.getElementById('myimg');
//   img.src = url;
// }).catch(function(error) {
//   // Handle any errors
// });
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDdbXojbpaPVunt9Y8aW3waAyG5Wk8C0u0",
  authDomain: "web-firebase-8903a.firebaseapp.com",
  databaseURL: "https://web-firebase-8903a.firebaseio.com",
  projectId: "web-firebase-8903a",
  storageBucket: "web-firebase-8903a.appspot.com",
  messagingSenderId: "553153415320"
};
firebase.initializeApp(config);

Vue.use(firebase)
Vue.use(firestore)
Vue.mixin(props)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
