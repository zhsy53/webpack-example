<template>
  <div id="app">
    <Header title="Welcome to Vue World" />
    <div id="nav">
      <router-link to="/one">one</router-link>|
      <router-link to="/two">two</router-link>
      <router-view />
    </div>

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
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  height: 400px;
  background: #337442;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
