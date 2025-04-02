<template>
  <h1>Home</h1>

  <div>
    <h1>/post(할 일 추가)</h1>
    <hr />
    <h3>할 일 추가</h3>
    <form @submit.prevent="addTodo">
      <div>
        할 일 :
        <br />
        <input type="text" v-model="state.todo.todo" />
        <br />
        <input type="text" v-model="state.todo.desc" />
      </div>
      <button>추가</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()


const state = reactive({
  todo: { todo: '', desc: '', done: false },
})

const addTodo = async () => {
  const url = '/api/todos'

  const response = await axios.post(url, state.todo) // data 부분에 todo 객체를 넣음
  console.log(response)

  const result = response.data;
  const id = result.id; // 추가된 할 일의 id 

  router.push(`/get/${id}`); // get/:id 페이지로 라우팅

}
</script>
