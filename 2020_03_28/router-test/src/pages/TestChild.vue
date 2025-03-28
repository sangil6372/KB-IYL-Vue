<template>
  <div class="card card-body">
    <h2>TestChild</h2>

    <h3>파라미터 num : {{ num }}</h3>

    <button class="btn btn-secondary" @click="closeTest">닫기</button>
    <!-- RouterLink를 버튼처럼 사용 -->
    <RouterLink to="/test">
      <button class="btn btn-secondary">닫기</button>
    </RouterLink>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, watchEffect } from "vue";

export default {
  name: "TestChild",

  setup() {
    const currentRoute = useRoute();

    const num = ref(currentRoute.params.num);

    watchEffect(() => {
      num.value = currentRoute.params.num;
    });

    // 프로그래밍 방식 라우팅 제어
    const router = useRouter();
    const closeTest = () => {
      router.push("/test");
      //   RouterLink to "/test" 클릭한 것과 같은 효과
    };

    console.log(num);

    return { num, closeTest };
  },
};
</script>
