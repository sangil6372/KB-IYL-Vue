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

<script setup>
name: "TodoCount";

const props = defineProps({
  completedCount: {
    type: Number,
    required: true,
  },
  totalCount: {
    type: Number,
    required: true,
  },
});
</script>
