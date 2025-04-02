<template>
  <div>
    <h3>Options API</h3>
    <input
      type="text"
      placeholder="입력하면 대문자로 변환"
      :value="name"
      @input="changeName($event.target.value)"
    />
  </div>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
    <button @click="calculateSum(x, y)">계산 고고</button>
    <p>x + Y = {{ sum1 }}</p>
  </div>
</template>

<script>
export default {
  name: "Calc1",
  data() {
    return {
      name: "",
      x: 10,
      y: 20,
      sum1: 30,
    };
  },
  methods: {
    // name 관련 메서드
    changeName(inputName) {
      this.name = inputName.toUpperCase();
    },

    // 계산 관련 메서드
    calculateSum(x, y) {
      this.sum1 = x + y;
    },
  },
};
</script>
