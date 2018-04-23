// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDdbXojbpaPVunt9Y8aW3waAyG5Wk8C0u0',
  authDomain: 'web-firebase-8903a.firebaseapp.com',
  databaseURL: 'https://web-firebase-8903a.firebaseio.com',
  projectId: 'web-firebase-8903a',
  storageBucket: 'web-firebase-8903a.appspot.com',
  messagingSenderId: '553153415320'
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
