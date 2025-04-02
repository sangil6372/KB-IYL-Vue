<template>
  <div class="container">
    <!-- 각각 같은 이름의 슬롯에 끼워 넣겠다. -->
    <slot name="header"></slot>
    <slot name="navbar"></slot>
  </div>

  <div class="content my-5 px-3">
    <!-- v-slot:default -->
    <slot></slot>  
  </div>

</template>
<script setup></script>
