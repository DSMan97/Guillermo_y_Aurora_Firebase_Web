// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import props from './mixins/props'
import firestore from 'firebase/firestore'

Vue.config.productionTip = false

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1950326645279831',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.0'
    });
    FB.AppEvents.logPageView();

  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
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
