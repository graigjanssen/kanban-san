<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="title">Task Name:</label>
      <input id="title" v-model="form.title" type="text" required />
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <input id="description" v-model="form.description" type="text" required />
    </div>
    <div class="action-buttons">
      <button @click="cancel" class="btn btn-cancel">Cancel</button>
      <button @click="submit" type="submit" class="btn btn-primary">
        Add Task
      </button>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from "vue";
export default defineComponent({
  name: "AddTask",
  emits: ["cancel", "submit"],
  setup(props, { emit }) {
    const form = reactive({
      id: 0,
      status: "to-do",
      title: "",
      description: "",
    });

    const cancel = () => {
      emit("cancel");
    };
    const submit = () => {
      emit("submit", toRaw(form));
    };
    return { cancel, submit, form };
  },
});
</script>
