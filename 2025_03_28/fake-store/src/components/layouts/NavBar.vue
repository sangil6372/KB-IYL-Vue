<!-- src/components/layouts/NavBar.vue -->
<template>
  <aside>
    <MenuGroup :menus="menus" />
  </aside>
</template>

<script setup>
import MenuGroup from "./menu/MenuGroup.vue";
import config from "@/config";
const menus = config.site.menus;
</script>
