<template>
  <span class="loader"></span>
</template>

<style>
.loader {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l5 1s infinite linear alternate;
  display: inline-block;
}

@keyframes l5 {
  0% {
    box-shadow: 20px 0 #fff, -20px 0 #ffffff99;
    background: #fff;
  }
  33% {
    box-shadow: 20px 0 #fff, -20px 0 #ffffff99; /* تغییر به سفید */
    background: #ffffff99; /* تغییر به سفید نیمه شفاف */
  }
  66% {
    box-shadow: 20px 0 #ffffff99, -20px 0 #fff; /* تغییر به سفید */
    background: #ffffff99; /* تغییر به سفید نیمه شفاف */
  }
  100% {
    box-shadow: 20px 0 #ffffff99, -20px 0 #fff; /* تغییر به سفید */
    background: #fff; /* تغییر به سفید */
  }
}
</style>
