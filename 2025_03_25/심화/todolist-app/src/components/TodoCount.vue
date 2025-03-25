<template>
  <div class="row mb-3">
    <div class="col-md text-center">
      전체 todo 개수 : <span>{{ totalCount }}</span>
    </div>
    <div class="col-md text-center">
      완료 todo 개수 :
      <span :class="{ completed: completedCount > 0 }">
        {{ completedCount }}
      </span>
    </div>
    <div class="col-md text-center">
      미완료 todo 개수 :
      <span :class="{ notCompleted: totalCount - completedCount > 0 }">
        {{ totalCount - completedCount }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoCount",
  props: {
    completedCount: {
      type: Number,
      required: true,
    },
    totalCount: {
      type: Number,
      required: true,
    },
  },
  //   TodoCount 내에서만 사용하니깐 여기서 정의
};
</script>
