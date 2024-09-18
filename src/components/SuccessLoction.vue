<template>
  <div class="success_conatiner">
    <div class="success_container-message">
      <img alt="sucess icon" src="../assets/images/done-icon.svg" />
      <h2>اطلاعات شما با موفقیت ثبت شد</h2>
      <RouterLink to="/view" class="button_link">
        <button class="success_conatiner-button">مشاهده اطلاعات</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.success_conatiner {
  height: 100vh;
  flex-direction: column;
  background-color: #f5f5f5;
}
.button_link {
  
  width: 90%;
}
.success_conatiner-button {
  border: none;
  width: 100%;
  border: 1px solid #00bfa5;
  color: #fff;
  font-weight: 700;
  color: #00bfa5;
  background-color: inherit;
  font-size: 16px;
  border-radius: 4px;
  padding: 12px 0px;
  cursor: pointer;
}
.success_container-message {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 70vh;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
.success_container-message h2 {
  color: #37474f;
}
@media (min-width: 1024px) {
  .success_conatiner {
    background-color: #f0f0f0;
    width: 400px;
    margin: 0 auto;
  }
}
</style>
