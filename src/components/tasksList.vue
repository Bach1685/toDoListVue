<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <list-item @remove="remove" @mark="mark" :item="item" />
    </li>
  </ul>
</template>

<script>
import listItem from "./listItem.vue";
export default {
  components: { listItem },
  props: {
    list: {
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
