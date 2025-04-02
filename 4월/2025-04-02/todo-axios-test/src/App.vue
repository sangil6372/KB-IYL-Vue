<template>
  <DefaultLayout>
    <!-- Header slot에 Header 컴포넌트 끼워넣기 -->
    <!-- slot이라는게 밖에서 안으로 넣는건가?  -->
    <template v-slot:header>
      <Header />
    </template>
    <template v-slot:navbar>
      <Navbar />
    </template>
    <!-- 바뀌는 부분 -->
    <template v-slot:default>
      <RouterView />
    </template>
  </DefaultLayout>
</template>

<script setup>
import { RouterView } from 'vue-router'
import DefaultLayout from './components/layouts/DefaultLayout.vue'
import Header from './components/layouts/Header.vue'
import Navbar from './components/layouts/Navbar.vue'
</script>
