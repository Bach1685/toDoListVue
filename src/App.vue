<template>
  To do
  <to-do-list @remove="remove" @mark="mark" :toDoList="list.toDoItems" />
  Done
  <to-do-list @remove="remove" :toDoList="list.doneItems" />
  <form-vue @add="add"></form-vue>
</template>

<script>
import ToDoList from "./components/toDoList.vue";
import formVue from "./components/form.vue";
import { List } from "./businesslogic/list";
export default {
  components: {
    ToDoList,
    formVue,
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
</style>
