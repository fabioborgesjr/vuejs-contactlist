<template>
  <div class="row">
    <div class="col-sm-6 col-md-6 col-lg-6">
      <h5 class="name">{{contact.name}}</h5>
      <p>{{contact.email}}</p>
    </div>
    <div class="btn btn-group-sm">
      <router-link
        class="btn btn-success"
        data-test="editar"
        :to="{path: `/${contact.id}/edit`, params: { id: contact.id }}"
      >Editar</router-link>
      <button data-test="apagar" @click="deleteCt(contact.id)" class="btn btn-danger">Remover</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      name: String,
      email: String,
      id: Number
    }
  },
  methods: {
    deleteCt() {
      this.$store.commit("delete", this.contact.id);

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

.btn {
  margin: 0 5px 0 5px;
}

.name {
  font-size: 1.5em;
  margin-bottom: 5px;
}
</style>