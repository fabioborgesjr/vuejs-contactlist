<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-md-4 col-lg-4">
        <div class="card my-5">
          <div class="card-body">
            <h5 class="card-title text-center">
              {{ title }}
            </h5>
            <slot></slot>
          </div>
        </div>
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
  width: 50%;
  margin-left: 25%;
  margin-top: 10%;
  text-align: center;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .1);
  background-color: #fff;
}

.card .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card .card-body {
  padding: 2rem;
}
</style>