<script setup>
import { ref } from "vue";

const collapsed = ref(false);
</script>

<template>
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <div class="header">
      <button class="menu-button" @click="collapsed = !collapsed">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
