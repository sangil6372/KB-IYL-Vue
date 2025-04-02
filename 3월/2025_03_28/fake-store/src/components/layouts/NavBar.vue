<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-3">
    <!-- 브랜드 -->
    <RouterLink class="navbar-brand" to="/"
      ><i class="fa-solid fa-house"></i> {{ config.title }}</RouterLink
    >

    <!-- 토글 버튼 -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <MenuGroup />
    </div>
  </nav>
</template>

<script setup>
import config from "@/config";
import MenuGroup from "./menu/MenuGroup.vue";
</script>
<style scoped></style>
