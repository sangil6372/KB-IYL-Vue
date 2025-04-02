<template>
  <div>
    x : <input type="text" v-model.number="x" />
    <br />
    결과 : {{ result }}
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "Calc5",
  setup() {
    const x = ref(0);
    const result = ref(0);

    watch(x, (cur, old) => {
      console.log(`${old} -> ${cur}`);
      result.value = cur * 2;
    });
    return { x, result };
  },
};
</script>
