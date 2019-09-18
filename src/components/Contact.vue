<template>
  <div class="row">
    <h5 class="name">{{contact.name}}</h5>
    <p>{{contact.email}}</p>
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
  margin-top: 20px;
}

.name {
  font-size: 1.5em;
  margin-bottom: 5px;
}
</style>