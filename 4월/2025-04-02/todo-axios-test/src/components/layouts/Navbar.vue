<template>
  <nav class="navbar navbar-expand bg-light">
    <div class="container-fluid">
      <!-- ✅ 토글 버튼 -->
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

      <!-- ✅ 메뉴 영역 -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <NavItem v-for="menu in menus" :menu="menu" 
            :key="menu.uri"
            class="nav-link" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavItem from './NavItem.vue'
import { RouterLink } from 'vue-router'

// 네비게이션 아이템에 전달할 주소 객체 배열
const menus = [
  { uri: '/', text: 'Home' },
  { uri: '/all', text: 'All' },
  { uri: '/get', text: 'Get' },
  { uri: '/post', text: 'Post' },
]
</script>
