<template>
  <li class="nav-item">
    <RouterLink class="nav-link" :to="menu.url">
      <i :class="menu.icon" class="me-1"></i> {{ menu.title }}
    </RouterLink>
  </li>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  menu: Object,
});
</script>
