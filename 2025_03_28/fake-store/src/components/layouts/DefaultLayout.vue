<template>
  <div>
    <Header />
    <div class="d-flex">
      <NavBar class="me-4" />
      <main class="flex-grow-1">
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
</script>
