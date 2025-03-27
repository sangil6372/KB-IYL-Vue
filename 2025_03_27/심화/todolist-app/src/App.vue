<template lang="">
  <div>
    <!-- 제목 -->
    <div id="app" class="container">
      <div class="card card-body bg-light">
        <div class="title">🕒 todoList App(Composition API Version) 💻</div>
      </div>
    </div>
    <!-- 할 일 입력 -->

    <div class="card card-default card-borderless">
      <div class="card-body">
        <!-- 방출된 이벤트 감지 되었을 때 -->
        <InputTodo @add-todo="addTodo" />

        <!-- 현황 -->
        <TodoCount
          :completed-count="completedCount"
          :total-count="state.todoList.length"
        />
        <!-- 목록 컴포넌트 
            목록 화면 랜더링에 필요한 데이터 todoList를 부모가 가지고 있음 
            props 이용 -> v-bind: 전달할 이름 ="데이터" 
        -->
        <TodoList
          v-bind:todoList="sortedList"
          @toggle-completed="toggleCompleted"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>

    <!-- 현황 -->

    <!-- 리스트 -->
  </div>
</template>
<script setup>
import { reactive, onMounted, computed } from "vue";

import InputTodo from "./components/InputTodo.vue";
import TodoList from "./components/TodoList.vue";
import TodoCount from "./components/TodoCount.vue";

const state = reactive({ todoList: [] });

//  마운트 시 실행함
onMounted(() => {
  state.todoList.push({
    id: Date.now(),
    todo: "자전거 타기",
    completed: false,
  });
  state.todoList.push({
    id: Date.now() + 1,
    todo: "딸과 공원 산책",
    completed: true,
  });
  state.todoList.push({
    id: Date.now() + 2,
    todo: "일요일 애견 카페",
    completed: false,
  });
  state.todoList.push({
    id: Date.now() + 3,
    todo: "Vue 원고 집필",
    completed: false,
  });
});
/* 할 일 추가 메서드 */
const addTodo = (receiveTodo) => {
  state.todoList.push({
    id: Date.now(),
    todo: receiveTodo,
    completed: false,
  });
};

const deleteTodo = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList.splice(index, 1);
};
const toggleCompleted = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList[index].completed = !state.todoList[index].completed;
};
const completedCount = computed(() => {
  return state.todoList.filter((todo) => todo.completed).length;
});

const sortedList = computed(() => {
  // 원본 배열을 복사한 후 정렬 (불변성 유지)
  return [...state.todoList].sort((t1, t2) => {
    if (t1.completed > t2.completed) return 1;
    if (t1.completed < t2.completed) return -1;

    const todo1 = t1.todo.toLowerCase();
    const todo2 = t2.todo.toLowerCase();

    if (todo1 > todo2) return 1;
    if (todo1 === todo2) return 0;
    return -1;
  });
});
</script>
