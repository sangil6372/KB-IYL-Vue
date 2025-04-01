<template>
  <header class="jumbotron-header text-white d-flex align-items-center">
    <div class="container">
      <h1 class="display-4 fw-bold">{{ title }}</h1>
      <p class="lead">{{ subtitle }}</p>
    </div>
  </header>
</template>

<script setup>
import config from '@/config/index.js'
const { title, subtitle } = config
</script>

<style scoped>
.jumbotron-header {
  height: 250px;
  background-image: url('space.jpg'); /* 배경 이미지 */
  background-size: cover;
  background-position: center;
  padding-left: 3rem;  /* 왼쪽 여백 */
}
</style>
