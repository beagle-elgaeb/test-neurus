import Vue from "vue";
import Vuex from "vuex";

import events from "./events.json";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { events },
  getters: {},
  mutations: {},
  actions: {},
});
