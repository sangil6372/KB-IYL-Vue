<template></template>

<script setup>
import axios from "axios";

let data = {
  todo: "윗몸 어쩌구",
  des: "너무 어쩌구",
  done: false,
};

// 백엔드로 POST 요청 보내기
axios.post("/api/todos", data)
  .then((response) => {
    console.log("성공!", response.data);
  })
  .catch((error) => {
    console.error("에러!", error);
  });
  </script>
