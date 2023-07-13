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
@import "./assets/styles/main.scss";
</style>
