<template></template>

<script setup>
import axios from "axios";
import { onMounted } from "vue";

const url = "api/todos2";

onMounted(async () => {
  try {
    const res = await axios.get(url);
    console.log(res);
  } catch (err) {
    console.log("에러 발생", err);
  }
});
</script>
