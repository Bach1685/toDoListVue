<template>
  To do
  <to-do-list :toDoList="list.toDoItems" />
  Done
  <to-do-list :toDoList="list.doneItems" />
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
  },
};
</script>

<style>
</style>
