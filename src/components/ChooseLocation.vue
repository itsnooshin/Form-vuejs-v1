<template>
  <div class="map-container">
    <div v-if="!isSubmited">
      <div class="map_container-title">
        <img src="../assets/images/back-icon.svg" alt="back icon" />
        <h1>انتخاب آدرس</h1>
      </div>
      <div class="map-wrapper">
        <div id="map" class="map"></div>
        <div class="map-overlay">
          <h2 class="title-mobile">انتخاب آدرس</h2>
          <h2 class="title-desktop">
            موقعیت مورد نظر خود را روی نقشه مشخص کنید
          </h2>
        </div>
      </div>
    </div>

    <div v-else>
      <SuccessLoctionVue />
    </div>
  </div>
  <div class="map-bottom" v-if="!isSubmited">
    <button type="submit" class="map_btn" @click="handleMapSubmit">
      <LoadingSpinnerVue v-if="isLoading" />
      <span v-else>تایید و ادامه</span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import LoadingSpinnerVue from "./LoadingSpinner.vue";
import SuccessLoctionVue from "./SuccessLoction.vue";

const isLoading = ref(false);
const isSubmited = ref(false);
const lat = ref(null);
const lng = ref(null);
let map, marker;

const handleMapSubmit = () => {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    isSubmited.value = true;
  }, 1000);
};

onMounted(() => {
  map = L.map("map").setView([35.719, 51.32], 17);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  marker = L.marker([35.719, 51.32]).addTo(map);

  map.on("click", function (e) {
    const { lat, lng } = e.latlng;
    marker.setLatLng([lat, lng]);
    marker
      .bindPopup(
        `<p style="font-size: 14px; font-family: vazir;">
      طول جغرافیایی: ${lat}<br>
      عرض جغرافیایی: ${lng}
    </p>`
      )
      .openPopup();
  });
});
</script>

<style scoped>
.map-container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}

#map {
  width: 100%;
  height: 100%;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background-color: #f7f7f7;
  border-radius: 4px;
  z-index: 2000;
}

.title-desktop {
  display: none;
}
.map_container-title {
  display: none;
}
.map_btn {
  border: none;
  width: 100%;
  background-color: #00bfa5;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border-radius: 4px;
  padding: 16px 0px;
  cursor: pointer;
}

.map-bottom {
  position: fixed;
  background-color: #f7f7f7;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 16px;
  margin-top: 50rem;
  z-index: 10000;
  min-height: 50px;
  padding: 18px;
}
@media (min-width: 1023px) {
  .map_container-title {
    width: 800px;
    margin: 0 auto;
  }
  .map_container-title {
    display: flex;
    padding-top: 22px;
    padding-bottom: 10px;
    line-height: 32px;
    font-size: 10px;
    color: #37474f;
  }
  .map-container {
    max-width: none;
    background-color: #f0f0f0;
    height: 100vh;
  }
  #map {
    width: 806px;
    height: 380px;
    margin: 0 auto;
  }
  .map-wrapper {
    height: 280px;

    width: 806px;
    margin: 0 auto;
  }

  .title-desktop {
    display: block;
    font-size: 14px;
    color: #37474f;
  }

  .title-mobile {
    display: none;
  }
  .map-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .map_btn {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
