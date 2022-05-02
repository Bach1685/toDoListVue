<template>
  <section class="section">
    <div class="list">
      <h2>To do</h2>
      <tasks-list :list="toDoItems" />
    </div>
    <div class="list">
      <h2>Done</h2>
      <tasks-list :list="doneItems" />
    </div>
    <adding-form />
  </section>
</template>

<script>
import tasksList from "./components/tasksList.vue";
import addingForm from "./components/form.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    tasksList,
    addingForm,
  },
  computed: mapGetters(["toDoItems", "doneItems"]),
};
</script>

<style>
.section {
  display: flex;
  gap: 50px;
}

.list {
  width: 300px;
}
</style>
