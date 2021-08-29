<template>
  <div class="observable-motify">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="学生证编号：">
        <el-input v-model="form.number" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="专业：">
        <el-input v-model="form.professional"></el-input>
      </el-form-item>
      <el-form-item label="班级：">
        <el-input v-model="form.theClass"></el-input>
      </el-form-item>

      <el-form-item label="个人成就：">
        <el-button @click="moreInfo" type="primary">添加</el-button>

        <el-table :data="achievementData" style="width: 100%">
          <el-table-column prop="time" label="时间" width="180" />
          <el-table-column prop="type" label="成就" width="180" />
          <el-table-column label="操作">
            <template>
              <el-button type="text" size="mini" @click="remove"
                ><i class="el-icon-close"></i
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
    <el-row type="flex" justify="center">
      <el-button type="primary" @click="confirm">确 定</el-button>
      <el-button type="primary" @click="cancel">取 消</el-button>
    </el-row>
  </div>
</template>
<script>
import { isEmptyObject } from "@/utils/common.js";
import { store, mutations, resetStore } from "./bus.js";
export default {
  name: "Tab",
  props: {
    modify: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      form: {
        number: "",
        name: "",
        professional: "",
        theClass: "",
      },
    };
  },
  computed: {
    // 该数据是moreInfo.vue选中之后保存在store.achievementList里，这里直接读取就ok
    achievementData() {
      return store.achievementList;
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // 如果不是{}就赋值
      if (!isEmptyObject(this.modify)) {
        this.form = { ...this.modify };
      }
    },
    // 确定
    confirm() {
      if (this.achievementData && this.achievementData.length) {
        // 把一条个人成就插入到form表单中
        this.$set(this.form, "oneAchievement", this.achievementData);
      }
      // 派发事件，修改完把数据回传
      this.$emit("modifyFinish", this.form);
      this.$emit("closeDialog");
    },
    cancel() {
      this.$emit("closeDialog");
    },
    moreInfo() {
      // 重置一下数据
      resetStore.resetFunc();
      // 打开弹窗
      mutations.setMoreInfoVisible(true);
    },
    // 移除数据
    remove() {
      mutations.setAchievementList([]);
    },
  },
};
</script>
