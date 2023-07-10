<template>
  <div class="kanban-board">
    <kanban-column
      v-for="column in columns"
      :key="column.status"
      :label="column.label"
      :status="column.status"
    />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import KanbanColumn from "./KanbanColumn.vue";

export default {
  components: {
    KanbanColumn,
  },
  setup() {
    const columns = ref([
      {
        label: "To-Do",
        status: "todo",
      },
      {
        label: "In Progress",
        status: "in-progress",
      },
      {
        label: "Done",
        status: "done",
      },
    ]);
    return { columns };
  },
};
</script>
