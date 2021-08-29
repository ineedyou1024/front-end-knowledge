<template>
  <div class="learn">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">大前端</template>
            <el-submenu index="1-1">
              <template slot="title">vue</template>
              <el-menu-item index="1-1-1" @click="goObservable"
                >observable跨组件状态存储器</el-menu-item
              >
            </el-submenu>
            <el-submenu index="1-1">
              <template slot="title">element</template>
              <el-menu-item index="1-1-1">选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">vant</template>
              <el-menu-item index="1-2-1" @click="goCalendar"
                >日历</el-menu-item
              >
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">八卦娱乐</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">上班摸鱼</el-menu-item>
              <el-menu-item index="2-2">守护发际线</el-menu-item>
              <el-menu-item index="2-3">编程一直在入门</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">如何提升自我</template>
              <el-menu-item index="2-4-1">提升通道一</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Learn",
  data() {
    return {};
  },
  methods: {
    goCalendar() {
      this.$router.push({
        path: "/learn/vancalend",
      });
    },
    goObservable() {
      this.$router.push({
        path: "/learn/vueobservable",
      });
    },
  },
};
</script>
<style scoped lang="less">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
