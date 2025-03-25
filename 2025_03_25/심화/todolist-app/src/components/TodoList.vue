<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!--  할 일 요소 컴포넌트  -->
        <!--  props 로 받은 데이터 수정하면 안됨 
            emit 으로 부모 전달 후 수정
            
            TodoItem -> TodoList -> App
        -->
        <TodoListItem
          v-for="todo in todolist"
          :todoitem="todo"
          @toggle-completed="$emit('toggle-completed', $event)"
          @delete-todo="$emit('delete-todo', $event)"
        />
        <!-- 자식 컴포넌트 에서 방출된 payload 참조 변수가 $event -->
      </ul>
    </div>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  // 부모로 부터 전달 받은 데이터 수신하고 유효성 검사
  props: {
    // 전달 받은 todolist는 배열 형태, 필수 데이터
    todolist: { type: Array, required: true },
  },
  mounted() {
    console.log("받은 todolist:", this.todolist);
  },
  //  부모 컴포넌트로 방출 여부 검사
  emits: ["toggle-completed", "delete-todo"],
};
</script>
