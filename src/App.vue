<template>
  <div>
    <Header title="你好" />
    <div id="container">container</div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Footer }
};
</script>

<style scoped>
#container {
  padding: 3px;
  background: #ddd;
}
</style>
