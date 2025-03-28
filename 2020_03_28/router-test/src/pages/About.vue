<template>
  <div class="card card-body">
    <h2>About</h2>
    <!-- 앞에서 만든 About.vue를 setup() 함수로 다시 정의하세요.
 -->
    <p>요청 경로 : {{ route.fullPath }}</p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "About",

  setup() {
    const route = useRoute();
    console.log(route);

    return { route };
  },
};
</script>
