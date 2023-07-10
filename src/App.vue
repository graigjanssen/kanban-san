<template>
  <kanban-column label="To-Do" />
  <kanban-column label="In Progress" />
  <kanban-column label="Done" />
</template>

<script lang="ts">
import KanbanColumn from "./components/KanbanColumn.vue";
export default {
  components: {
    KanbanColumn,
  },
};
</script>
<style lang="scss">
#app {
  background-color: #444;
  color: #eee;
}
</style>
