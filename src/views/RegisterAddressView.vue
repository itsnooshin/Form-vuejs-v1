<script setup>
import FormGroupVue from "../components/FormGroup.vue";
</script>

<template>
  <div class="container">
    <div class="conatiner_main">
      <FormGroupVue />
    </div>
  </div>
  <div class="container_btn-bottom">
    <button type="submit" class="container_btn">ثبت و ادامه</button>
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

.container_btn {
  border: none;
  width: 100%;
  background-color: #00bfa5;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border-radius: 4px;
  padding: 12px 0px;
  cursor: pointer;
}
.container_btn-bottom {
  position: fixed;
  background-color: white;
  bottom: 0;
  width: 100%;
  padding: 16px;
  margin-top: 50rem;
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
  .container_btn-bottom {
    padding: 20px;
  }

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

  .container_btn-bottom {
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0px;
  }
  .container_btn {
    width: 20%;
    padding: 12px 0px;
  }
}
</style>
