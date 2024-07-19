<script setup>
import { ref } from "vue";
import menuItems from "@/lib/menuItems";

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

  <div class="profile">
    <img :src="menuItems.profile.image" alt="" />
    <div class="profile-name" v-if="!collapsed">
      {{ menuItems.profile.name }}
    </div>
  </div>
</template>

<style scoped></style>
