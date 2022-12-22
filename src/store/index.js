import { createStore } from "vuex";
import MyToken from "./token";

var Token = new MyToken("null");

export default createStore({
  state() {
    return {
      AppToken: Token,
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
