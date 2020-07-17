import Vue from 'vue'
import App from './App.vue'

import * as firebase from "firebase";
import router from "./routes/index";

import store from "./store/index";


Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyBmgbv9_EcegPbWuSNpnnZ1GBwR8LTra6E",
  authDomain: "react-auth-4760b.firebaseapp.com",
  databaseURL: "https://react-auth-4760b.firebaseio.com",
  projectId: "react-auth-4760b",
  storageBucket: "react-auth-4760b.appspot.com",
  messagingSenderId: "971220300592",
  appId: "1:971220300592:web:8f1c818b7f9ee051498ef5",
  measurementId: "G-ZZ9BVQ1NXD"

};

firebase.initializeApp(configOptions);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
