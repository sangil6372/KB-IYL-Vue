<template lang="">
  <label for="nameInput">이름</label>
  <input id="nameInput" type="text" v-model="name" />
  <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
</template>
<script>
export default {
  name: "InputName",
  data() {
    return { name: "" };
  },
};
</script>
<style lang=""></style>
