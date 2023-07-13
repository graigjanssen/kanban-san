<template>
  <div class="modal">
    <header>
      <h2>{{ title }}</h2>
      <button class="modal-close" @click="close">x</button>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <button class="btn btn-cancel" @click="close">
        {{ cancelButtonText }}
      </button>
      <button class="btn btn-primary" @click="submit">
        {{ okButtonText }}
      </button>
    </footer>
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
