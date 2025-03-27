<template>
  <li
    :key="todoitem.id"
    class="list-group-item"
    :class="{ 'list-group-item-success': todoitem.completed }"
  >
    <input
      type="checkbox"
      class="pointer me-3"
      v-model="todoitem.completed"
      @click="toggleCompletedHandler(todoitem.id)"
    />

    <span class="pointer" :class="{ 'todo-done': todoitem.completed }">
      {{ todoitem.todo }} {{ todoitem.completed ? "(완료)" : "" }}
    </span>

    <span
      class="float-end badge bg-secondary pointer"
      @click.stop="emit('delete-todo', todoitem.id)"
      >삭제</span
    >
  </li>
</template>



<script setup>
name: "TodoListItem";

const props = defineProps({
  todoitem: {
    type: Object, //객체 타입 검사
    required: true, // 필수 데이터
  },
});

const emit = defineEmits(["toggle-completed", "delete-todo"]);
const toggleCompletedHandler = (id) => {
  emit("toggle-completed", id); // 부모에게 id를 전달
};
</script>
