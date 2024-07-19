<script setup>
import { defineProps } from "vue";

const props = defineProps(["item", "collapsed"]);
</script>

<template>
  <a href="#">
    <div class="item">
      <div class="icon">
        <font-awesome-icon :icon="['fas-solid', props.item.icon]" size="2x" />
      </div>
      <div class="title" v-if="!collapsed">{{ props.item.title }}</div>
    </div>
  </a>
</template>

<style scoped></style>
