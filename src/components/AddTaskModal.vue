<template>
  <app-modal title="Add Task" @close="close">
    <form @submit.prevent="submit" class="form add-task-form">
      <div class="form-group">
        <label for="title">Task Name:</label>
        <input
          id="title"
          v-model="form.title"
          type="text"
          class="field"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="form.description"
          rows="3"
          class="field"
          required
        ></textarea>
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
<style scoped lang="scss">
.add-task-form {
  width: 80%;
  margin: 0 auto;
}
</style>
