<template>
  <card-vue title="Criar contato">
    <form>
      <div class="form-group">
        <label for="name">Nome</label>
        <input v-model="contact.name" type="text" class="form-control" id="name" data-test="nome" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="contact.email"
          type="email"
          class="form-control"
          id="email"
          data-test="email"
        />
      </div>
      <div class="form-group">
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          data-test="criar"
          @click="submit(contact)"
        >Criar novo contato</button>
      </div>
    </form>
    <RouterLink slot="footer" to="/">Voltar</RouterLink>
  </card-vue>
</template>

<script>
import CardVue from "../components/Card.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      contact: {}
    };
  },
  components: {
    CardVue
  },
  computed: {
    ...mapGetters(["contactByID"])
  },
  methods: {
    submit(contact) {
      this.$store.commit("add", contact);

      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
.row {
  text-align: left;
  justify-content: flex-start;
}

.card-body {
  overflow-y: hidden;
}
</style>