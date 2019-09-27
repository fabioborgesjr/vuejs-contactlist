<template>
  <card-vue :dataTest="`total-${contacts.length}`" :title="`Contatos (${contacts.length})`">
    <span v-if="contacts.length === 0" data-test="sem-contatos">Você não possui contatos... :(</span>
    <contact-vue v-else v-for="(contact, index) in contacts" :key="index" :contact="contact" />
    <router-link
      class="btn btn-success btn-lg btn-block"
      to="/create"
      data-test="novo-contato"
      slot="footer"
    >Adicionar contato</router-link>
  </card-vue>
</template>

<script>
import CardVue from "../components/Card.vue";
import ContactVue from "../view/Contact.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CardVue,
    ContactVue
  },
  computed: {
    ...mapGetters(["contacts"])
  }
};
</script>