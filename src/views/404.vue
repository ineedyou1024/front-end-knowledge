<template>
    <div class="not-find">
        <span class="title">404</span>
    </div>
</template>

<script>
export default {
    name: 'NotFind',
    data () {
        return {};
    },
};
</script>
<style lang="less" scoped>
.not-find {
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title {
    font-size: 50px;
    font-weight: bold;
}
</style>
