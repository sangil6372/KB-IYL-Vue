<template>
  <li class="nav-item">
    <RouterLink :to="props.menu.uri" class="nav-link">{{ props.menu.text }} </RouterLink>
  </li>

</template>
<script setup>
const props = defineProps({
  //  약간 유효성 검사 느낌~?
  menu: {
    type: Object,
    required: true,
  },
})
</script>
