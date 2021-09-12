<template>
    <div class="home">
        <p class="title">辛苦了</p>
        <p class="title">放松一下吧</p>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {};
    },
    created () { },
    methods: {},
};
</script>
<style lang="less" scoped>
.home {
    background: url("../assets/picture/starry-sky.jpg") no-repeat;
    height: 900px;
    width: inherit;
    background-size: cover;
}
p {
    margin: 0;
}
.title {
    font-size: 36px;
    color: rgb(230, 152, 35);
}
</style>
