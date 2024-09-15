<script setup>
import { ref } from "vue";
const status = ref(false);

function toggleChange() {
  status.value = !status.value;
}
</script>

<template>
  <header>
    <img alt="achareh logo" src="./assets/images/achare-logo.svg" />
    <nav class="header-navigation">
      <ul>
        <li>ثبت آدرس</li>
        <li>مشاهده آدرس</li>
      </ul>
    </nav>
  </header>
  
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: white;
}

.header-navigation ul {
  display: flex;
  gap: 5px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
}
main {
  background-color: #f5f5f5;
  height: 100vh;
}
</style>
