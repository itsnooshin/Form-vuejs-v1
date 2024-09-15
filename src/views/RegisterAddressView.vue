<script setup></script>

<template>
  <div class="container">
    <h2 class="container_title">ثبت آدرس</h2>
    <div class="contianer_form">
      <h3>لطفا مشخصات خود را وارد کنید</h3>
      <div class="container_from-group">
        <label for="name" class="">نام </label>
        <input type="text" id="name" placeholder="مثال: محمد" required />
      </div>
      <div class="container_from-group">
        <label for="family-name" class="">نام خانوادگی</label>
        <input
          type="text"
          id="family-name"
          placeholder="مثال: رضایی"
          required
        />
      </div>
      <div class="container_from-group">
        <label for="phone-number" class="">شماره تلفن همراه </label>
        <input
          type="number"
          id="family-name"
          placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۸۷ "
          required
        />
      </div>
      <div class="container_from-group">
        <label for="phone-number" class="">شماره تماس ثابت (اختیاری) </label>
        <input
          type="number"
          id="family-name"
          placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۸۷ "
          required
        />
      </div>
      <div class="container_from-group">
        <label for="phone-number" class="">آدرس</label>
        <input type="text" id="family-name" required />
      </div>

      <div class="container_from-group-option">
        <label>جنسیت</label>
        <div class="container_from-group-option-radio">
          <div class="container_from-group-option-radio_female">
            <input type="radio" id="female" name="gender" required />
            <label for="female">خانم</label>
          </div>
          <div class="container_from-group-option-radio_male">
            <input type="radio" id="male" name="gender" required />
            <label for="male">آقا</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container_btn-bottom">
    <button type="submit" class="container_btn">ثبت و ادامه</button>
  </div>
</template>

<style>
.container {
  background-color: #F5F5F5;
  min-height: 100vh;
  padding: 5px 16px;
}
.container_title {
  padding-top: 16px;
  color: #37474f;
}
.contianer_form {
  background-color: #fff;
  margin-top: 10px;
  border-radius: 9px;
  padding: 15px 16px 16px 16px;
  color: #37474f;
  padding-bottom: 20px;
  margin-bottom: 12rem;
}
.container_from-group {
  display: flex;
  flex-direction: column;
  padding: 15px 0;
}
.container_from-group label {
  font-weight: 500;
  font-size: 13px;
  line-height: 32px;
}
.container_from-group input {
  border: none;
  padding: 11px 10px;
  border-radius: 3px;
  border: 1px solid #d4d4d4;
  caret-color: #00bfa5;
}

input::placeholder {
  font-size: 14px;
}
input:focus {
  border-color: #00bfa5;
  outline: none;
}
.container_from-group-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding-top: 20px;
}
.container_from-group-option-radio {
  display: flex;

  align-items: center;
  gap: 10px;
}
.container_from-group-option-radio label {
  font-size: 13px;
}
.container_from-group-option label:first-child {
  font-size: 13px;
  font-weight: 500;
}
.container_from-group-option-radio_female,
.container_from-group-option-radio_male {
  display: flex;
  gap: 2px;
  font-weight: 500;
}
.container_from-group-option-radio_female label,
.container_from-group-option-radio_male label {
  margin-right: 5px;
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
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
