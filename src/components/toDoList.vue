<template>
  <ul>
    <li v-for="item in toDoList" :key="item.id">
      <element-list
        @remove="remove"
        @mark="mark"
        :elementList="item"
      ></element-list>
    </li>
  </ul>
</template>

<script>
import elementList from "./elementList.vue";
export default {
  components: { elementList },
  props: {
    toDoList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
    mark(id) {
      this.$emit("mark", id);
    },
  },
};
</script>

<style>
</style>
