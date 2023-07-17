<template>
  <div class="modal">
    <header>
      <h2>{{ title }}</h2>
      <button class="modal-close" @click="close">x</button>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
});
</script>
