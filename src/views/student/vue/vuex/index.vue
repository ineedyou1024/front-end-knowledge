<template>
    <div>
        <p>我的资产: {{ money }}</p>
    </div>
</template>

<script>
export default {

    data () {
        return {
        };
    },
    computed: {
        money () {
            return this.$store.state.myMoney;
        }
    },
};
</script>

<style>
</style>
