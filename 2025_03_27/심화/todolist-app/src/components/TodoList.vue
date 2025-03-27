<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!--  할 일 요소 컴포넌트  -->
        <!--  props 로 받은 데이터 수정하면 안됨 
            emit 으로 부모 전달 후 수정
            
            TodoItem -> todoList -> App
        -->
        <todoListItem
          v-for="todo in todoList"
          :todoitem="todo"
          @toggle-completed="$emit('toggle-completed', $event)"
          @delete-todo="$emit('delete-todo', $event)"
        />
        <!-- 자식 컴포넌트 에서 방출된 payload 참조 변수가 $event -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import todoListItem from "./TodoListItem.vue";
name: "todoList";

const props = defineProps({
  todoList: { type: Array, required: true },
});

const emit = defineEmits(["delete-todo", "toggle-completed"]);
</script>
