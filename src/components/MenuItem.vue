<script setup>
import { defineProps } from "vue";

const props = defineProps(["item", "collapsed"]);
</script>

<template>
  <a
    href="#"
    @click.prevent="props.item.onClick"
    class="text-white no-underline block hover:bg-white hover:text-black"
  >
    <div class="flex items-center p-[10px] gap-[10px]">
      <div class="icon">
        <font-awesome-icon
          :icon="['fas-solid', props.item.icon]"
          size="2x"
          class="w-20 flex justify-center"
        />
      </div>
      <div class="title" v-if="!collapsed">{{ props.item.title }}</div>
    </div>
  </a>
</template>
