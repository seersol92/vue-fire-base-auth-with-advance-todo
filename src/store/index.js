
import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/Auth";

//Load Vuex
Vue.use(Vuex);

//Create Store
const store = new Vuex.Store({
    modules: {
        Auth,
    }
});
export default store;
