<template>
    <div class="home">
        <p
            v-for="(item, index) in bestWish"
            :key="item.title"
            :style="{ left: lefts * (index + 1) + 'px' }"
            :class="['title', isEven(index) ? 'font1' : 'font2']"
        >
            {{ item.title }}
        </p>
    </div>
</template>

<script>
import { wish } from '@/mook/home.js';
export default {
    name: 'Home',
    data () {
        return {
            bestWish: wish,
            lefts: 70
        };
    },
    created () { },
    methods: {
        isEven (index) {
            return index % 2 === 0;
        }
    },
};
</script>
<style lang="less" scoped>
.home {
    background: url("../assets/picture/starry-sky.jpg") no-repeat;
    height: 900px;
    width: inherit;
    position: relative;
    background-size: cover;
    .title {
        font-size: 30px;
        color: rgb(230, 152, 35);
    }
    .font1 {
        transform: rotate(-90deg);
        position: absolute;
        top: 280px;
        margin: 20px 0;
        text-align: right;
    }
    .font2 {
        transform: rotate(90deg);
        position: absolute;
        top: 280px;
        margin: 20px 0;
        text-align: left;
    }
}
p {
    margin: 0;
}
</style>
