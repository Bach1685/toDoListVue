<template>
  <div>
    <p>{{ elementList.value }}</p>
    <button v-if="!elementList.isDone">+</button>
    <button>-</button>
  </div>
</template>

<script>
export default {
  props: {
    elementList: {
      required: true,
    },
  },
};
</script>
