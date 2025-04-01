<!-- src/components/layouts/menu/MenuItem.vue -->
<template>
  <li class="list-group-item">
    <RouterLink :to="menu.url" class="nav-link">
      <i :class="menu.icon" class="me-2"></i>
      {{ menu.title }}
    </RouterLink>
  </li>
</template>

<script setup>
defineProps({ menu: Object });
</script>
