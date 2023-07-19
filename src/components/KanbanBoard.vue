<template>
  <div class="kanban-board">
    <kanban-column
      v-for="column in state.columns"
      :key="column.status"
      :label="column.label"
      :status="column.status"
      :tasks="state.tasks"
    />
    <button class="btn btn-primary" @click="state.isAddTaskModalOpen = true">
      New Task
    </button>
    <add-task-modal
      v-if="state.isAddTaskModalOpen"
      @close="state.isAddTaskModalOpen = false"
      @submit="addTask"
    />
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { Task, Column } from "@/types";
import { generateId } from "@/services/idService";
import KanbanColumn from "./KanbanColumn.vue";
import AddTaskModal from "./AddTaskModal.vue";
interface State {
  columns: Column[];
  tasks: Task[];
  isAddTaskModalOpen: boolean;
}

export default {
  components: {
    KanbanColumn,
    AddTaskModal,
  },
  setup() {
    const state: State = reactive({
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

    function addTask(formData) {
      const task: Task = {
        id: generateId(),
        status: "to-do",
        title: formData.title,
        description: formData.description,
      };
      state.tasks.push(task);
      state.isAddTaskModalOpen = false;
    }
    return { state, addTask };
  },
};
</script>
