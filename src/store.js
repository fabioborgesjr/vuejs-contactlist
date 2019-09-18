import Vue from 'vue';
import Vuex from 'vuex';
import Persistence from 'vuex-persist';

Vue.use(Vuex);

const local = new Persistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    //
  },

  mutations: {
    //
  },

  getters: {
    //
  },

  plugins: [
    local.plugin,
  ],
});