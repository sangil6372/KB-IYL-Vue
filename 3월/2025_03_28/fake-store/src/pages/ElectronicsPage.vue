<template>
  <h1><i :class="menuInfo.icon"></i> {{ menuInfo.title }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router'
import config from "@/config/index.js";

// 현재 라우트 정보 가져오기
const route = useRoute()


// 현재 URL에 맞는 메뉴 찾기
const menuInfo = config.menus.find(menu => menu.url === route.path) || {
  title: '알 수 없음',
  icon: 'fa-solid fa-circle-question'
}
</script>
