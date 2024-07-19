<script setup>
import { ref } from "vue";

const collapsed = ref(false);
</script>

<template>
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']"></div>
</template>

<style scoped></style>
