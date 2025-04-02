<template>
  <h1>/get/:id(단건 조회)</h1>
  <hr />
  <h3>조회할 id</h3>

  <div>
    <input type="text" placholder="id 입력" v-model="id" />
    <button @click="getTodo">조회</button>
  </div>
  
  <div>
    <h3>조회 결과</h3>
    <ul>
      <li>ID: {{ state.todo.id }}</li>
      <li>할 일: {{ state.todo.todo }}</li>
      <li>설명: {{ state.todo.desc }}</li>
      <li>완료 여부: {{ state.todo.done ? '완료' : '미완료' }}</li>
    </ul>
  </div>

</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const currentRoute = useRoute();

const id = ref(currentRoute.params.id);
const state = reactive({ todo: {} })

//  비동기 코드를 명시함
const getTodo = async () => {
  const response = await axios.get(`/api/todos/${id.value}`)
  console.log(response)
  // response는 Axios 전체 응답 객체
  state.todo =  response.data;
}

onMounted(()=>{
  getTodo();
})

</script>
