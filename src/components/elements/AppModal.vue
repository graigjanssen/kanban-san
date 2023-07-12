<template>
  <header>
    <h2>{{ title }}</h2>
    <button @click="close">X</button>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <button @click="close">{{ cancelButtonText }}</button>
    <button @click="submit">{{ okButtonText }}</button>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    okButtonText: {
      type: String,
      required: false,
      default: "OK",
    },
    cancelButtonText: {
      type: String,
      required: false,
      default: "Cancel",
    },
  },
  emits: ["submit", "close"],
  setup(props, { emit }) {
    const submit = () => {
      emit("submit");
    };
    const close = () => {
      emit("close");
    };
    return { submit, close };
  },
});
</script>
