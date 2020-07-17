import Vue from 'vue'
import App from './App.vue'

import * as firebase from "firebase";
import router from "./routes/index";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "",
  authDomain: "vue-firebase-auth-2802d.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-2802d.firebaseio.com",
  projectId: "vue-firebase-auth-2802d",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(configOptions);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
