<template>
  <header>{{ title }}</header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
header {
  margin-bottom: 12px;
  background: #232323;
  color: #eee;
  font-size: 24px;
}
</style>
