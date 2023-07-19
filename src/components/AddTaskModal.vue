<template>
  <app-modal title="Add Task" @close="close">
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="title">Task Name:</label>
        <input id="title" v-model="form.title" type="text" required />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <input
          id="description"
          v-model="form.description"
          type="text"
          required
        />
      </div>
    </form>
    <template v-slot:footer>
      <button class="btn btn-cancel" @click="close">Cancel</button>
      <button class="btn btn-primary" @click="submit">Add Task</button>
    </template>
  </app-modal>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import AppModal from "./elements/AppModal.vue";
export default defineComponent({
  name: "AddTaskModal",
  components: {
    AppModal,
  },
  emits: ["close", "submit"],
  setup(props, { emit }) {
    const form = reactive({
      id: 0,
      status: "to-do",
      title: "",
      description: "",
    });

    const close = () => {
      emit("close");
    };
    const submit = () => {
      emit("submit", form);
    };
    return { form, close, submit };
  },
});
</script>
