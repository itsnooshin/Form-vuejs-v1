<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <a href="/">
      <img
        alt="achareh logo"
        class="logo"
        src="../assets/images/achare-logo.svg"
      />
    </a>
    <nav class="header_navigation">
      <ul>
        <li>
          <RouterLink
            to="/"
            active-class="is-active"
            class="header_navigation-register"
            >ثبت آدرس</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/view"
            active-class="is-active"
            class="header_navigation-view"
          >
            مشاهده آدرس ها</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 17px;
}
.header_navigation ul {
  display: flex;
  gap: 21px;
  font-weight: 700;
  font-size: 12px;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.logo {
  width: 45px;
  height: 25px;
}
main {
  background-color: #f5f5f5;
  height: 100vh;
}
.header_navigation-register {
  color: #00bfa5;
  line-height: 19.53px;
  letter-spacing: 1px;
}
.header_navigation-view {
  color: #00bfa5;
  line-height: 19.53px;
  letter-spacing: 1px;
}

.is-active {
  color: #37474f;
}

@media (min-width: 768px) {
  header {
    padding: 15px 30px;
  }
}

@media (min-width: 1024px) {
  header {
    padding: 20px 40px;
  }
}

@media (min-width: 1280px) {
  header {
    padding: 15px 48px;
    background-color: #F7F7F7;
  }
  .header_navigation-view {
    font-size: 14px;
  }
  .header_navigation-register {
    font-size: 14px;
  }
  .logo {
    width: 70px;
    height: 39px;
  }
}
</style>
