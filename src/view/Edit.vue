<template>
  <div class="row">
    <div class="col-sm-6 col-md-6 col-lg-6">
      <h5 class="name">{{contact.name}}</h5>
      <p>{{contact.email}}</p>
    </div>
    <div class="btn btn-group-sm">
      <router-link class="btn btn-success" :to="`/${contact.id}/edit`" >Editar</router-link>
      <button class="btn btn-danger">Remover</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      name: String,
      email: String
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