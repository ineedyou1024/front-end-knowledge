<template>
  <div id="app">
    <Tab></Tab>
    <router-view />
  </div>
</template>
<script>
import Tab from "./components/Tab/index.vue";
export default {
  components: {
    Tab,
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
