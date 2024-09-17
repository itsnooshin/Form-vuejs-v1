<script setup>
import FormGroupVue from "../components/FormGroup.vue";
</script>

<template>
  <div class="">
    <div class="conatiner_main">
      <FormGroupVue />
    </div>
  </div>
</template>

<style>
.container {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 5px 16px;
}
.container_title {
  padding-top: 16px;
  color: #37474f;
}

@media (min-width: 768px) {
  .container_main {
    width: 700px;
    margin: 0 auto;
  }
  .container {
    background-color: #f0f0f0;
  }
  input {
    background-color: #f7f7f7;
    color: #37474f;
    font-weight: 700;
  }
  .container {
    background-color: #f0f0f0;
  }
}

@media (min-width: 1024px) {
  .container_title {
    font-size: 15px;
    margin: 0 auto;
    line-height: 32px;
    padding-bottom: 7px;
  }
}

@media (min-width: 1280px) {
  .container_main {
    width: 800px;
    margin: 0 auto;
  }
}
</style>
