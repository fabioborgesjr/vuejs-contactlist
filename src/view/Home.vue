<template>
  <card-vue title="Contatos">
    <contact-vue v-for="(contact, index) in contacts" :key="index" :contact="contact"/>
  </card-vue>
</template>

<script>
import CardVue from '../components/Card.vue'
import ContactVue from '../components/Contact.vue'

export default {
  components: {
    CardVue,
    ContactVue
  },
  data() {
    return {
      contacts: [{
      name: "Fábio",
      email: "fafafa@biobiobio.com"
    },{
      name: "Fábio",
      email: "fafafa@biobiobio.com"
    },{
      name: "Fábio",
      email: "fafafa@biobiobio.com"
    },{
      name: "Fábio",
      email: "fafafa@biobiobio.com"
    },{
      name: "Fábio",
      email: "fafafa@biobiobio.com"
    },{
      name: "Fábio",
      email: "fafafa@biobiobio.com"
    }]
    }
  }
}
</script>