<script setup>
import { reactive, ref, watch } from "vue";
import ChooseLocation from "../components/ChooseLocation.vue";
const formData = reactive({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  phoneNumberOptional: "",
  address: "",
  gender: "",
});

const error = reactive({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  phoneNumberOptional: "",
  address: "",
  gender: "",
});

const isValid = ref(false);

const validatePhoneNumberInput = (event) => {
  const input = event.target.value;
  formData.phoneNumber = input.replace(/\D/g, "");
};

const validatePhoneNumberInputOptional = (event) => {
  const input = event.target.value;
  formData.phoneNumberOptional = input.replace(/\D/g, "");
};

const submitForm = async () => {
  let formIsValid = true;

  // Reset errors
  Object.keys(error).forEach((key) => (error[key] = ""));

  // Validate fields
  if (!formData.firstName) {
    error.firstName = "پرکردن این فیلد الزامی است";
    formIsValid = false;
  } else if (formData.firstName.length < 3) {
    error.firstName = "نام باید حداقل دارای 3 کاراکتر باشد";
    formIsValid = false;
  }

  if (!formData.lastName) {
    error.lastName = "پر کردن این  فیلد الزامی است";
    formIsValid = false;
  } else if (formData.lastName.length < 3) {
    error.lastName = "نام خانوادگی حداقل باید دارای 3 کاراکتر باشد";
    formIsValid = false;
  }

  if (!formData.phoneNumber) {
    error.phoneNumber = "پر کردن این الزامی است";
    formIsValid = false;
  } else if (!/^[0-9]{11}$/.test(formData.phoneNumber)) {
    error.phoneNumber = "شماره وارد شده صحیح نمی باشد";
    formIsValid = false;
  }

  if (!formData.address) {
    error.address = "پر کردن این الزامی است";
    formIsValid = false;
  } else if (formData.address.length < 3) {
    error.address = "ادرس حداقل باید دارای 3 کاراکتر باشد";
    formIsValid = false;
  }

  if (formIsValid) {
    isValid.value = true;
  }
};
</script>

<template>
  <div v-if="!isValid">
    <form @submit.prevent="submitForm" novalidate>
      <div class="container_form-title">
        <h2 class="">ثبت آدرس</h2>
        <div class="contianer_form">
          <h3>لطفا مشخصات خود را وارد کنید</h3>
          <div class="container_form-items">
            <div class="container_from-group">
              <label for="name">نام</label>
              <input
                v-model="formData.firstName"
                type="text"
                id="name"
                placeholder="مثال: محمد"
                required
                :class="{ 'input-error': error.firstName }"
              />
              <span v-if="error.firstName" class="error-message">{{
                error.firstName
              }}</span>
            </div>
            <div class="container_from-group">
              <label for="family-name">نام خانوادگی</label>
              <input
                v-model="formData.lastName"
                type="text"
                id="family-name"
                placeholder="مثال: رضایی"
                required
                :class="{ 'input-error': error.lastName }"
              />
              <span v-if="error.lastName" class="error-message">{{
                error.lastName
              }}</span>
            </div>
            <div class="container_from-group">
              <label for="phone-number">شماره تلفن همراه </label>
              <input
                v-model="formData.phoneNumber"
                type="text"
                id="phone-number"
                placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۸۷ "
                required
                @input="validatePhoneNumberInput"
                :class="{ 'input-error': error.phoneNumber }"
              />
              <span v-if="error.phoneNumber" class="error-message">{{
                error.phoneNumber
              }}</span>
            </div>
            <div class="container_from-group">
              <label class="telephone-number-label">
                <span
                  >شماره تلفن ثابت
                  <span class="telephone-number-label-small"
                    >(اختیاری)</span
                  ></span
                >
                <span class="prefix">* با پیش شماره</span>
              </label>

              <input
                type="text"
                id="telephone-number"
                placeholder="مثال: ۰۲۱۳۳۴۴۵۶۷ "
                v-model="formData.phoneNumberOptional"
                required
                @input="validatePhoneNumberInputOPtional"
              />
            </div>
            <div class="container_from-group full-width">
              <label for="adress">آدرس</label>
              <input
                type="text"
                id="adress"
                required
                v-model="formData.address"
                :class="{ 'input-error': error.address }"
              />
              <span v-if="error.address" class="error-message">{{
                error.address
              }}</span>
            </div>
          </div>
          <div class="container_from-group-option">
            <label>جنسیت</label>
            <div class="container_from-group-option-radio">
              <div class="container_from-group-option-radio_female">
                <label class="custom-radio-container">
                  <input
                    type="radio"
                    name="gender"
                    value="خانم"
                    required
                    v-model="formData.gender"
                  />
                  <span class="custom-radio"></span>
                  <span class="custom-radio-label">خانم</span>
                </label>
              </div>
              <div class="container_from-group-option-radio_male">
                <label class="custom-radio-container">
                  <input
                    type="radio"
                    name="gender"
                    v-model="formData.gender"
                    value="آقا"
                    required
                  />
                  <span class="custom-radio"></span>
                  <span class="custom-radio-label">آقا</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container_btn-bottom">
        <button type="submit" class="container_btn">ثبت و ادامه</button>
      </div>
    </form>
  </div>

  <div v-else>
    <ChooseLocation />
  </div>
</template>

<!-- style -->

<style>
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

.telephone-number-badge {
  font-size: 11px;
}

.telephone-number-label {
  display: flex;
  justify-content: space-between;
}
.telephone-number-label-small {
  font-size: 11px;
}
.prefix {
  color: #757575;
}
.container_from-group-option-radio {
  display: flex;
  gap: 20px;
}

.container_from-group-option-radio_female,
.container_from-group-option-radio_male {
  display: flex;
  align-items: center;
}

.error-message {
  color: #e61236;
  font-size: 12px;
  line-height: 32px;
}

.input-error {
  border-color: #e61236 !important;
}

@media (min-width: 768px) {
  input {
    background-color: #f7f7f7;
    color: #37474f;
    font-weight: 700;
  }
}

@media (min-width: 1024px) {
  .contianer_form {
    margin: 0 auto;
    max-width: 100%;
    background-color: #f7f7f7;
    margin-bottom: 120px;
    padding: 20px 38px 20px 38px;
  }
  .container_form-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .container_from-group.full-width {
    grid-column: span 2;
  }

  .container_title {
    font-size: 15px;
    margin: 0 auto;
    line-height: 32px;
    padding-bottom: 7px;
  }
  .contianer_form h3 {
    font-size: 15px;
    font-weight: 700;
  }
  .container_from-group label {
    font-size: 15px;
  }
  .container_from-group-option label:first-child,
  .container_from-group-option label {
    font-size: 15px;
  }

  .prefix {
    font-size: 11px;
  }
}

@media (min-width: 1280px) {
  .container_form-title {
    width: 800px;
    margin: 0 auto;
    color: #37474f;
  }
  .container_form-title h2 {
    padding: 10px 0;
    font-size: 16px;
  }

  .contianer_form {
    width: 800px;
    margin: 0 auto;
    max-width: 100%;
    background-color: #f7f7f7;
    padding: 22px 48px 20px 48px;
    margin-bottom: 0px;
  }

  .container_form-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  input::placeholder {
    color: #b6b6b6;
    font-size: 14px;
  }

  .contianer_form h3 {
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
