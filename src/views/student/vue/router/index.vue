<template>
    <div id="testroure-box">
        <!-- 方式一 通过当前路由规程获取参数 -->
        <p>$route获得路由参数：{{ $route.params.id }}</p>
        <!-- 方式二 由props传  推荐用这种 -->
        <p>props获得路由参数：{{ id }}</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {

        };
    },
};
</script>
<style></style>
