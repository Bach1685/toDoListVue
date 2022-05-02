<template>
  <div>
    <input
      v-model="inputValue"
      @keyup.enter="add(inputValue)"
      placeholder="Введите таску"
      type="text"
    />
    <button @click="add(inputValue)">добавить</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    ...mapMutations(["add"]),
  },
};
</script>
