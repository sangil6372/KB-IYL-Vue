<template>
  <div class="container">
    <Header/>
    <router-view></router-view>
    <footer/>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  components: {
    Header,
  },
};
</script>
