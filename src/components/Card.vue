<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title text-center">{{ title }}</h5>
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Seu título"
    },
    subtitle: {
      type: String,
      default: "Seu subtítulo"
    }
  }
};
</script>

<style>
.card {
  top: 10%;
  width: 500px;
  max-height: 500px;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.card .card-title {
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
}

.card .card-body {
  overflow-y: auto;
  padding: 2rem;
}
</style>