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
  computed: {
    // 완료 개수 카운트
    completedCount() {
      // todolist의 요소 중 completed 가 true인 요소만 남긴 배열 반환
      return this.todolist.filter((todo) => todo.completed).length;
    },

    // 정렬
    sortedList() {
      this.todolist.sort((t1, t2) => {
        // true > false  -> 결과 : true
        if (t1.completed > t2.completed) {
          return 1; // 양수 반환 시 자리 바뀜 (t1, t2 -> t2, t1)
        }

        if (t1.completed < t2.completed) {
          return -1; // 음수 반환 시 자리 바꿈 X
        }

        // 위 if문 실행 X === completed가 같을 경우
        // -> 문자열 오름 차순 정렬

        // 모두 소문자로 변경(대소문자 구분 X)
        const todo1 = t1.todo.toLowerCase();
        const todo2 = t2.todo.toLowerCase();

        if (todo1 > todo2) return 1; // 자리 교체
        else if (todo1 === todo2) return 0; // 유지
        else return -1; // 유지
      });

      // 정렬된 todoList 반환
      return this.todolist;
    },
  },
</script>
