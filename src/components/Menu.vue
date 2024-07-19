<script setup>
import { ref } from "vue";
import menuItems from "@/lib/menuItems";
import MenuItem from "./MenuItem.vue";

const collapsed = ref(false);
</script>

<template>
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <div class="header">
      <button class="menu-button" @click="collapsed = !collapsed">
        <font-awesome-icon :icon="['fas-solid', 'bars']" />
      </button>
    </div>

    <div class="profile">
      <img :src="menuItems.profile.image" alt="" />
      <div class="profile-name" v-if="!collapsed">
        {{ menuItems.profile.name }}
      </div>
    </div>

    <div class="menu-items">
      <ul>
        <MenuItem
          v-for="menuItem in menuItems.items"
          :key="menuItem.id"
          :item="menuItem"
          :collapsed="collapsed"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
