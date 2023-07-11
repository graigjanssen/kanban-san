<template>
  <div class="kanban-board">
    <kanban-column
      v-for="column in state.columns"
      :key="column.status"
      :label="column.label"
      :status="column.status"
      :tasks="state.tasks"
    />
    <button @click="addTask">New Task</button>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { Task, Column } from "@/types";
import KanbanColumn from "./KanbanColumn.vue";

interface State {
  id: number;
  columns: Column[];
  tasks: Task[];
}

export default {
  components: {
    KanbanColumn,
  },
  setup() {
    const state: State = reactive({
      id: 1,
      columns: [
        {
          label: "To-Do",
          status: "to-do",
        },
        {
          label: "In Progress",
          status: "in-progress",
        },
        {
          label: "Done",
          status: "done",
        },
      ],
      tasks: [],
    });

    function addTask() {
      const task: Task = {
        id: state.id,
        status: "to-do",
        title: `Dummy Task #${state.id}`,
        description: `Description for Dummy Task #${state.id}`,
      };
      state.id++;
      state.tasks.push(task);
    }
    return { state, addTask };
  },
};
</script>
