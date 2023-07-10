<template>
  <kanban-board />
</template>

<script lang="ts">
import KanbanBoard from "./components/KanbanBoard.vue";
export default {
  components: {
    KanbanBoard,
  },
};
</script>
<style lang="scss">
#app {
  background-color: #444;
  color: #eee;
}
</style>
