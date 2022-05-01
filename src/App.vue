<template>
  <section class="section">
    <div class="list">
      <h2>To do</h2>
      <tasks-list @remove="remove" @mark="mark" :list="list.toDoItems" />
    </div>
    <div class="list">
      <h2>Done</h2>
      <tasks-list @remove="remove" :list="list.doneItems" />
    </div>
    <adding-form @add="add" />
  </section>
</template>

<script>
import tasksList from "./components/tasksList.vue";
import addingForm from "./components/form.vue";
import { List } from "./businesslogic/list";
export default {
  components: {
    tasksList,
    addingForm,
  },
  data() {
    return {
      list: new List(),
    };
  },
  methods: {
    add(inputValue) {
      this.list.add(inputValue);
    },
    remove(id) {
      this.list.remove(id);
    },
    mark(id) {
      this.list.mark(id);
    },
  },
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
