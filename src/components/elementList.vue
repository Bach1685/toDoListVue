<template>
  <div>
    <p>{{ elementList.value }}</p>
    <button v-if="!elementList.isDone" @click="mark(elementList.id)">+</button>
    <button @click="remove(elementList.id)">-</button>
  </div>
</template>

<script>
export default {
  props: {
    elementList: {
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
