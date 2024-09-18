<script setup>
import { ref, onMounted } from "vue";

const adresses = ref([]);
const isLoading = ref(false);
const ErrorMessage = ref("");
const fetchAdress = async () => {
  isLoading.value = true;
  try {
    const response = await fetch(
      "https://stage.achareh.ir/api/karfarmas/address",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      adresses.value = data;
    } else {
      ErrorMessage.value = "درخواست شما با خطا مواجه شد. لطفاً دوباره تلاش کنید."
    }
  } catch (error) {
    ErrorMessage.value = error.message
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchAdress();
});
</script>

<template>
  <div class="container_adress">
    <div class="container_wrapper">
      <h2 v-if="ErrorMessage" class="error-message-body">{{ ErrorMessage }}</h2>
      <h2>آدرس و مشخصات</h2>
      <div
        v-if="isLoading"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50vh;
        "
      >
        <div class="loader-get"></div>
      </div>
      <div
        v-else
        v-for="(address, index) in adresses"
        :key="index"
        class="info-card-mobile"
      >
        <div class="info-row">
          <label class="info-row info-title">نام و نام خانوادگی</label>
          <span>{{ `${address.first_name} ${address.last_name}` }} </span>
        </div>
        <div class="info-row">
          <label class="info-title">جنسیت:</label>
          <span>{{ address.gender === "" ? "-" : address.gender }}</span>
        </div>
        <div class="info-row">
          <label class="info-row info-title">شماره تلفن همراه:</label>
          <span>{{ address.coordinate_mobile }}+</span>
        </div>
        <div class="info-row">
          <label class="info-title">شماره تلفن ثابت:</label>
          <span>{{ address.coordinate_phone_number }}+</span>
        </div>
        <div class="container_wrapper-break"></div>
        <div class="info-row_adress">
          <label class="info-title">آدرس</label>
          <span>{{ address.address }}</span>
        </div>
      </div>
      <div
        class="info_card-desktop"
        v-for="(address, index) in adresses"
        :key="index"
      >
        <div class="info-grid">
          <div class="info-grid-column">
            <div class="info-item info-title">نام</div>
            <div class="info-item info-description">
              {{ address.first_name }}
            </div>
          </div>
          <div>
            <div class="info-item info-title">نام خانوادگی</div>
            <div class="info-item info-description">
              {{ address.last_name }}
            </div>
          </div>
          <div>
            <div class="info-item info-title">شماره تلفن همراه</div>
            <div class="info-item info-description">
              {{ address.coordinate_mobile }}
            </div>
          </div>
          <div>
            <div class="info-item info-title">شماره تلفن ثابت</div>
            <div class="info-item info-description">
              {{ address.coordinate_phone_number }}
            </div>
          </div>

          <div>
            <div class="info-item info-title">جنسیت</div>
            <div class="info-item info-description">
              {{ address.gender === "" ? "-" : address.gender }}
            </div>
          </div>
          <div>
            <div class="info-item info-title">آدرس</div>
            <div class="info-item info-description">
              {{ address.address }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container_adress {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 26px 16px;
}
.container_adress h2 {
  font-size: 16px;
  color: #37474f;
}

.info-card-mobile {
  background-color: #ffff;
  padding: 19px 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  margin-top: 12px;
}
.info-row .info-title {
  font-size: 14px;
  color: #9b9b9b;
  font-weight: 700;
}
.info-row span {
  font-size: 14px;
  color: #37474f;
  padding-bottom: 16px;
  font-weight: 700;
}
.info-row {
  display: flex;
  justify-content: space-between;
}
.container_wrapper-break {
  border-top: 1px solid #e0e0e0;
  padding-top: 12px;
}
.info-row_adress {
  display: flex;
  flex-direction: column;
}
.info-row_adress span {
  font-size: 14px;
  color: #37474f;
  font-weight: 700;
  padding-bottom: 16px;
  padding-top: 10px;
}
.info-row_adress label {
  font-size: 14px;
  color: #9b9b9b;
  font-weight: 700;
}
.info_card-desktop {
  display: none;
}

@media (min-width: 1024px) {
  .container_wrapper {
    width: 900px;
    margin: 0 auto;
  }

  .container_adress {
    background-color: #f0f0f0;
    min-height: 100vh;
  }
  .info-card-mobile {
    display: none;
  }
  .info_card-desktop {
    display: block;
    background-color: #f7f7f7;
    padding: 32px 40px 27px 30px;
    margin-top: 10px;
    border-radius: 4px;
  }
  .column {
    background-color: red;
    display: flex;
    flex-direction: column;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
    margin: 0 auto;
  }

  .info-item {
    font-size: 16px;
  }

  .info-item.info-title {
    color: #9b9b9b;
    font-size: 14px;
    color: #9b9b9b;
    font-weight: 700;
  }
  .info-item.info-description {
    color: #37474f;
    font-weight: 700;
    padding-top: 14px;
  }
}

.loader-get {
  width: 50px;
  aspect-ratio: 1;
  --_c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 12px 12px;
  animation: l7 1s infinite;
}
@keyframes l7 {
  to {
    transform: rotate(0.5turn);
  }
}

</style>
