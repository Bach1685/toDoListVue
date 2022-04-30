<template>
  <div>
    <input
      v-model="inputValue"
      @keyup.enter="add"
      placeholder="Введите таску"
      type="text"
    />
    <button @click="add">добавить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    add() {
      this.$emit("add", this.inputValue);
    },
  },
};
</script>
