<!-- BaseInput.vue -->
<template>
  <div class="container_from-group">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      required
      class="form-control"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  label: String,
  id: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
});
</script>

<style scoped>

</style>
