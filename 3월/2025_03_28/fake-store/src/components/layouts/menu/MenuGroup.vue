<template>
  <ul class="navbar-nav me-auto mt-2 mt-lg-0">
    <MenuItem v-for="menu in config.menus" :key="menu.url" :menu="menu" />
  </ul>
</template>

<script setup>
import config from "@/config";
import MenuItem from "./MenuItem.vue";
</script>
