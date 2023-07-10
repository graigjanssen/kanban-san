<template>
  <div class="kanban-column">
    <h2>{{ label }}</h2>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
  },
};
</script>
