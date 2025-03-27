<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          id="msg"
          type="text"
          class="form-control"
          name="msg"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodoHander"
        />

        <!-- 추가 버튼 클릭 시 작성된 할 일 내용을 todolist에 추가 -->
        <span class="btn btn-primary input-group-addon" @click="addTodoHander"
          >추가</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

name: "InputTodo";
const todo = ref("");

const addTodoHander = () => {
  if (todo.value.length >= 3) {
    emit("add-todo", todo.value);
    todo.value = ""; // 입력된 내용 초기화
  } else {
    alert("할 일은 3글자 이상으로 작성해");
  }
};
</script>
