<template>
  <ul><input type="checkbox" :checked="checked" />{{ name }}</ul>
</template>

<script>
export default {
  name: "CheckboxItem",
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  // 속성명을 배열로 정의
};
</script>
