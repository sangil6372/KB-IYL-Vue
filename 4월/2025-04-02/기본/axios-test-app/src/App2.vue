<template><h1>App2</h1></template>

<script setup>
import axios from "axios";
import { onMounted } from "vue";

onMounted(async () => {
  const res = await axios.get("/api/todos");
  console.log(res.data);
});
</script>
