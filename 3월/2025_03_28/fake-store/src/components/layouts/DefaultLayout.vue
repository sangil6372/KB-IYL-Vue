<template>
  <div>
    <Header />
    <NavBar />

    <main class="container my-5">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
</script>
