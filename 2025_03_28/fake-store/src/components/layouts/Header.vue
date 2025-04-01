<template>
  <header class="py-3">
    <h1>{{ title }}</h1>
    <p class="text-muted">{{ subtitle }}</p>
  </header>
</template>

<script setup>
import config from "@/config/index.js";
const { title, subtitle } = config;
</script>
