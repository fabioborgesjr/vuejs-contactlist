import Vue from 'vue';
import Vuex from 'vuex';
import Persistence from 'vuex-persist';

Vue.use(Vuex);

const local = new Persistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    contacts: [
      {
        id: 1,
        name: "Fábio",
        email: "fafafa@biobiobio.com"
      },
      {
        id: 2,
        name: "Fábio",
        email: "fafafa@biobiobio.com"
      },
      {
        i:3,
        name: "Fábio",
        email: "fafafa@biobiobio.com"
      }
    ]
  },

  mutations: {
    //
  },

  getters: {
    contacts: state => {
      return state.contacts;
    }
  },

  plugins: [
    local.plugin,
  ],
});