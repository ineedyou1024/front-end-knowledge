<template>
  <div class="observable-motify">
    <el-dialog
      append-to-body
      title="荣耀时刻"
      :visible.sync="dialogVisible"
      :before-close="beforeClose"
      @open="openDialog"
      width="800px"
    >
      <el-form ref="form" :model="form" label-width="100px" inline>
        <el-form-item label="时间段">
          <el-input v-model.trim="form.time"></el-input>
        </el-form-item>
        <el-form-item label="获得成就">
          <el-input v-model.trim="form.type"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="search" type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="searchResult" style="width: 100%">
        <el-table-column prop="time" label="时间" />
        <el-table-column prop="type" label="成就" />
        <el-table-column label="选择" center>
          <template slot-scope="scope">
            <el-radio
              v-model="radio"
              :label="scope.$index"
              @change.native="getCurrentRow(scope.row)"
              style="color: #fff; padding-left: 10px; margin-right: -25px"
              >{{ "" }}
            </el-radio>
          </template>
        </el-table-column>
      </el-table>
      <el-row type="flex" justify="center" style="margin-top: 20px">
        <el-button type="primary" @click="confirm">确 定</el-button>
        <el-button type="primary" @click="cancel">取 消</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { achievement } from "@/mook/observableData.js";
import { store, mutations } from "./bus.js";
export default {
  props: {},
  data() {
    return {
      form: {
        time: "",
        type: "",
      },
      searchResult: [],
      radio: "",
      selectSearch: [],
    };
  },
  computed: {
    dialogVisible() {
      return store.moreInfoVisible;
    },
  },
  methods: {
    // 模拟搜索接口，模拟模糊查询
    search() {
      this.searchResult = [];
      if (!this.form.time && !this.form.type) {
        this.$message.error("请输入查询条件");
      } else if (this.form.time && this.form.type) {
        achievement.forEach((item) => {
          if (
            item.time.includes(this.form.time) &&
            item.type.includes(this.form.type)
          ) {
            this.searchResult.push(item);
          }
        });
      } else if (this.form.time && !this.form.type) {
        achievement.forEach((item) => {
          if (item.time.includes(this.form.time)) {
            this.searchResult.push(item);
          }
        });
      } else if (!this.form.time && this.form.type) {
        achievement.forEach((item) => {
          if (item.type.includes(this.form.type)) {
            this.searchResult.push(item);
          }
        });
      }
    },
    cancel() {
      // 关闭弹窗
      mutations.setMoreInfoVisible(false);
    },
    // 选中数据后，确认
    confirm() {
      // 如果没有选中，有报错提示
      if (!this.selectSearch.length) {
        this.$message.error("请先选中后再提交");
        return;
      }
      // 把数据存放到store
      mutations.setAchievementList(this.selectSearch);
      // 关闭弹窗
      mutations.setMoreInfoVisible(false);
    },
    // 选中搜索出来的数据（单选）
    getCurrentRow(row) {
      this.selectSearch = [];
      this.selectSearch.push({ ...row });
    },
    // 关闭弹窗触发的回调
    beforeClose() {
      mutations.setMoreInfoVisible(false);
    },
    // 打开弹窗触发的回调
    openDialog() {
      // 初始化
      this.searchResult = [];
      this.selectSearch = [];
    },
  },
};
</script>
<style scoped lang="less">
/deep/.el-radio__input.is-checked + .el-radio__label {
  color: #fff;
}
</style>
