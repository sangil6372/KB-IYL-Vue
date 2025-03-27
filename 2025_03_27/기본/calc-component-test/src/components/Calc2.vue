<template>
  <!-- <div>
    <h3>Composition API</h3>
    <input
      type="text"
      placeholder="입력하면 대문자로 변환"
      :value="name"
      @input="changeName($event.target.value)"
    />
  </div> -->
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
  </div>
  <button @click="calAdd(x, y)">계산</button>
  <p>X + Y = {{ result }}</p>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Calc2",
  setup() {
    // // 이름 대문자 관련
    // const name = ref("");
    // const changeName = (inputName) => {
    //   name.value = inputName.toUpperCase();
    // };
    //  계산 관련
    const x = ref(10);
    const y = ref(20);
    const result = ref(30);
    const calAdd = () => {
      result.value = x.value + y.value;
    };
    return {  calAdd, x, y, result };
  },
};
</script>
