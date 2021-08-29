<template>
  <div class="tab">
    <ul>
      <router-link to="/" tag="li">首页</router-link>
      <router-link to="/learn" tag="li">学习中心</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Tab",
};
</script>
<style scoped>
li {
  list-style: none;
}
ul {
  display: flex;
  list-style: none;
}
ul li:nth-child(2n) {
  display: inline-block;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-weight: bolder;
  background-color: rgb(44, 173, 44);
  flex: 1;
}
ul li:nth-child(2n-1) {
  display: inline-block;
  text-align: center;
  font-weight: bolder;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: rgb(230, 152, 35);
  flex: 1;
}
</style>
