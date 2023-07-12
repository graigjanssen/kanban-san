<template>
  <div class="kanban-board">
    <kanban-column
      v-for="column in state.columns"
      :key="column.status"
      :label="column.label"
      :status="column.status"
      :tasks="state.tasks"
    />
    <button @click="state.isAddTaskModalOpen = true">New Task</button>
    <app-modal
      v-if="state.isAddTaskModalOpen"
      title="Add Task"
      okButtonText="Add Task"
      @close="state.isAddTaskModalOpen = false"
      @submit="addTask"
    >
      <h3>Some fake stuff!</h3>
      <p>Just some more fake stuff to waste time</p>
    </app-modal>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { Task, Column } from "@/types";
import KanbanColumn from "./KanbanColumn.vue";
import AppModal from "./elements/AppModal.vue";

interface State {
  id: number;
  columns: Column[];
  tasks: Task[];
  isAddTaskModalOpen: boolean;
}

export default {
  components: {
    KanbanColumn,
    AppModal,
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
      isAddTaskModalOpen: false,
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
      state.isAddTaskModalOpen = false;
    }
    return { state, addTask };
  },
};
</script>
