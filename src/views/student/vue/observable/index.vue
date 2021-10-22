<template>
    <div id="observable-box">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="number" label="学生证编号" width="180" />
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="professional" label="专业" width="180" />
            <el-table-column prop="theClass" label="班级" />
            <el-table-column
                prop="clubMember"
                label="俱乐部"
                :formatter="formatter"
            />
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        size="mini"
                        @click="modify(scope.row)"
                        >修改</el-button
                    >
                    <el-button
                        type="primary"
                        size="mini"
                        :disabled="scope.row.clubMember !== 1"
                        @click="applyQualification(scope.row)"
                        >申请会员</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="修改个人信息"
            :visible.sync="dialogVisible"
            width="800px"
        >
            <Modify
                :modify="needModifyObj"
                @modifyFinish="modifyFinish"
                @closeDialog="closeDialog"
            />
            <MoreInfo />
        </el-dialog>
    </div>
</template>

<script>
import Modify from '@/components/vueObservable/modify.vue';
import MoreInfo from '@/components/vueObservable/moreInfo.vue';


export default {
    name: 'Observable',
    components: {
        Modify,
        MoreInfo,
    },
    data () {
        return {
            tableData: [],
            dialogVisible: false,
            needModifyObj: {},
        };
    },
    created () {
        this.getMock();
    },
    methods: {
        getMock () {
            this.$axios.get('/api/students')
                .then(res => {
                    console.log('字符串', res.data);
                    if (res.data.returnCode === 0) {
                        this.tableData = res.data.students;
                    } else {
                        this.tableData = [];
                        this.$message.error('数据请求失败');
                    }
                });
        },
        modify (row) {
            this.dialogVisible = true;
            this.needModifyObj = { ...row };
        },
        // 申请会员资格
        applyQualification (row) {
            console.log(row);
        },
        formatter (row) {
            return row.clubMember === 1 ? '非会员' : '会员';
        },
        modifyFinish (data) {
            this.tableData.forEach((item) => {
                if (item.number === data.number) {
                    const { professional, name, theClass } = data;
                    item.professional = professional;
                    item.name = name;
                    item.theClass = theClass;
                }
            });
        },
        closeDialog () {
            this.dialogVisible = false;
        },
    },
};
</script>

<style></style>
