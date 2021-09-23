<template>
    <div id="array-box">
        <el-button
            type="primary"
            round
            @click="mapDialog"
        >
            map
        </el-button>
        <el-dialog
            title="map"
            :visible.sync="mapVisible"
            width="800px"
        >
            <p>[1,7,11].map(parseInt)的结果为：<span style="color:red"> {{result()}}</span></p>
            <p>[1,2,3,4,5,6].map(item => item > 3)的结果为：<span style="color:red"> {{result2()}}</span></p>
            <pre>[1,2,3,4,5,6].map(item => {
    if(item > 3){
        return item
    }
})
的结果为：</pre>
            <span style="color:red">{{result3()}}</span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'Array',
    data () {
        return {
            mapVisible: false
        };
    },
    methods: {
        mapDialog () {
            this.mapVisible = true;
        },
        result () {
            return [1, 7, 11].map(parseInt);
        },
        result2 () {
            return [1, 2, 3, 4, 5, 6].map(item => item > 3);
        },
        result3 () {
            return [1, 2, 3, 4, 5, 6].map(item => {
                if (item > 3) {
                    return item;
                }
            });
        }
    }
};
</script>

<style></style>
