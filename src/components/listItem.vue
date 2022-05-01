<template>
  <div>
    <p>{{ item.value }}</p>
    <button v-if="!item.isDone" @click="mark(item.id)">Выполнить</button>
    <button @click="remove(item.id)">Удалить</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
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
