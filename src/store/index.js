import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import Index from "./modules/index";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    Index
  },
  getters
});
