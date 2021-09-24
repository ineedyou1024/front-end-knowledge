<template>
    <div class="learn">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside
                width="200px"
                style="background-color: rgb(238, 241, 246)"
            >
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">大前端</template>
                        <el-submenu index="1-1">
                            <template slot="title">vue</template>
                            <el-menu-item index="1-1-1" @click="goToNewPage(2)"
                                >observable跨组件状态存储器</el-menu-item
                            >
                            <el-menu-item index="1-1-2" @click="goToNewPage(3)"
                                >路由跳转</el-menu-item
                            >
                            <el-menu-item index="1-1-3" @click="goToNewPage(5)"
                                >vuex状态管理</el-menu-item
                            >
                            <el-menu-item index="1-1-4" @click="goToNewPage(4)"
                                >去404看看</el-menu-item
                            >
                        </el-submenu>
                        <el-submenu index="1-1">
                            <template slot="title">element</template>
                            <el-menu-item index="1-1-1">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-2">
                            <template slot="title">vant</template>
                            <el-menu-item
                                index="1-2-1"
                                @click="goToNewPage(1, { id: 12533 })"
                                >日历</el-menu-item
                            >
                        </el-submenu>
                        <el-submenu index="1-3">
                            <template slot="title">js</template>
                            <el-menu-item index="1-3-1" @click="goToNewPage(6)"
                                >数组</el-menu-item
                            >
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">八卦娱乐</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">上班摸鱼</el-menu-item>
                            <el-menu-item index="2-2">守护发际线</el-menu-item>
                            <el-menu-item index="2-3"
                                >编程一直在入门</el-menu-item
                            >
                        </el-menu-item-group>
                        <el-submenu index="2-4">
                            <template slot="title">如何提升自我</template>
                            <el-menu-item index="2-4-1"
                                >提升通道一</el-menu-item
                            >
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
import { url } from '@/utils/url.js';
export default {
    name: 'Learn',
    data () {
        return {};
    },
    methods: {
        goToNewPage (id, querys) {
            if (this.$store.state.routeIndex === id) return;
            this.$store.commit('currentRoute', id);
            url.forEach(item => {
                if (item.id === id) {
                    if (querys && typeof querys === 'object') {
                        this.$router.push({
                            path: item.path,
                            query: querys
                        });
                    } else {
                        this.$router.push({
                            path: item.path,
                        });
                    }

                }
            });
        }
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
