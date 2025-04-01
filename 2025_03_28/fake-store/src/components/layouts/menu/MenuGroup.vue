<!-- src/components/layouts/menu/MenuGroup.vue -->
<template>
  <ul class="list-group">
    <MenuItem v-for="menu in menus" :key="menu.url" :menu="menu" />
  </ul>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";
defineProps({ menus: Array });
</script>
