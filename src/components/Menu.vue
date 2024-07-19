<script setup>
import { ref } from "vue";
import menuItems from "@/lib/menuItems";
import MenuItem from "./MenuItem.vue";

const collapsed = ref(false);
</script>

<template>
  <div
    :class="[
      'bg-[#222] text-white h-screen transition-all duration-300 font-sans fixed left-0 top-0',
      collapsed ? 'w-20' : 'w-[350px]',
    ]"
  >
    <div class="flex justify-end">
      <button
        class="border-none bg-transparent text-white p-[10px]"
        @click="collapsed = !collapsed"
      >
        <font-awesome-icon :icon="['fas-solid', 'bars']" size="2x" />
      </button>
    </div>

    <div class="p-[10px] text-center">
      <img
        :src="menuItems.profile.image"
        alt="icon"
        class="rounded-[50%] min-w-[50px] max-w-[300px] w-full"
      />
      <div class="px-[10px] py-0 text-[18px]" v-if="!collapsed">
        {{ menuItems.profile.name }}
      </div>
    </div>

    <div class="menu-items">
      <ul class="list-none p-0 m-0">
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
