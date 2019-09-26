<template>
  <card-vue title="Contatos">
    <contact-vue v-for="(contact, index) in contacts" :key="index" :contact="contact" />
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