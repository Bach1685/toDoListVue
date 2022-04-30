<template>
  <ul>
    <li v-for="item in toDoList" :key="item.id">
      <element-list :elementList="item"></element-list>
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
};
</script>

<style>
</style>
