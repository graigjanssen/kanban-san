<template>
  <div class="kanban-column">
    <h2>{{ label }}</h2>
    <ul>
      <task-card
        v-for="task in filteredTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Task } from "@/types";
import TaskCard from "./TaskCard.vue";
export default defineComponent({
  components: {
    TaskCard,
  },
  props: {
    label: String,
    status: String,
    tasks: Array as () => Array<Task>,
  },
  setup(props) {
    const filteredTasks = computed(() => {
      return props.tasks?.filter((task: Task) => task.status === props.status);
    });

    return { filteredTasks };
  },
});
</script>
