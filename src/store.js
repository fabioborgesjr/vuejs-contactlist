import Vue from "vue";
import Vuex from "vuex";
import Persistence from "vuex-persist";

Vue.use(Vuex);

const local = new Persistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    contacts: []
  },

  mutations: {
    edit: (state, form) => {
      state.contacts = state.contacts.filter(contact => {
        if (contact.id === form.id) {
          contact = form;
        }

        return contact;
      });
    },
    delete: (state, id) => {
      state.contacts = state.contacts.filter(contact => {
        return contact.id !== id;
      });
    },
    add(state, form) {
      const newId = Math.floor(Math.random() * 9999999) + 1;

      state.contacts.push({ ...form, id: newId });
    }
  },

  getters: {
    contacts: state => {
      return state.contacts;
    },
    contactByID: state => id => {
      return state.contacts.find(contact => contact.id === id);
    }
  },

  plugins: [local.plugin]
});
