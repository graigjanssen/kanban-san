<template>
  <div class="task-card">
    <h3>{{ taskName }}</h3>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    taskName: String,
  },
};
</script>
