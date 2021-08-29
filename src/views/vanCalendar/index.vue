<template>
  <div class="home">
    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirmFn"
      :formatter="formatter"
      :className="'van-calendar__top-info'"
    />
  </div>
</template>

<script>
import { datas } from "./data";

export default {
  name: "DoctorData",
  data() {
    return {
      // 医生id
      doctorId: "",
      // 姓名信息
      doctorInfo: {},
      // 所点击的时间
      timeValue: "",
      // 医生排班预约次数和day值
      curNums: [],
      // 最小时间值  当前时间
      minDate: new Date(),
    };
  },
  created() {
    // 接受上一层传来的数据

    this.doctorId = 124455;
    this.doctorInfo = {
      bookDayNum: 7,
    };
    //  获取医生排版日期预约次数
    this.getDoctorData();
  },
  methods: {
    // 获取医生排版日期预约次数
    async getDoctorData() {
      // 发送请求获取后台数据
      const data = await this.getDetail();
      //  取出剩余次数和day的值
      this.curNums = data.data;
      // 打印的格式  [0:{key:14,value:57},1:{key:15,value:57},2:{key:16,value:0}]
    },
    getDetail() {
      return Promise.resolve(datas);
    },
    // 日期添加备注
    formatter(day) {
      // 当前月份的日
      var date = day.date.getDate();

      for (let i = 0; i < this.curNums.length; i++) {
        // 当前点击的日相同
        if (date == this.curNums[i].key) {
          // 判断预约次数是否为0
          if (this.curNums[i].value == 0) {
            // 日期添加备注
            // day.topInfo = '已约满'
            day.className = "haha";
          } else {
            // 日期添加备注
            day.topInfo = "可预约";
          }
        }
      }
      return day;
    },
    // 点击任意日期
    confirmFn(data) {
      this.timeValue = this.timeFormat(data);

      for (let i = 0; i < this.curNums.length; i++) {
        // 如果当前点击的日 相同
        if (this.timeValue == this.curNums[i].key) {
          // 当前日期的预约次数为0  提示用户并不可跳转
          if (this.curNums[i].value == 0) {
            return this.$toast.fail("当前日期已约满");
          }

          this.$router.push({
            name: "Registration",
            params: {
              data: data,
            },
          });
        }
      }
    },
    // 时间格式化 2019-09-08
    timeFormat(time) {
      // let year = time.getFullYear()
      // let month = time.getMonth() + 1
      let day = time.getDate();
      return day;
    },
  },
  computed: {
    // 最大日期为当前时间日期+预约时间段
    maxDate() {
      let curDate = new Date().getTime();
      // 后台返回的预约天数(7) - 1   因为不减一 会多出一天 预约天数为7 页面会显示8天
      let one = (this.doctorInfo.bookDayNum - 1) * 24 * 3600 * 1000;
      let oneYear = curDate + one;
      return new Date(oneYear);
    },
  },
};
</script>
<style scoped lang="less">
/deep/.van-calendar__top-info {
  background: linear-gradient(
    86deg,
    rgba(212, 165, 116, 0.98),
    rgba(238, 202, 163, 0.98)
  );
}
/deep/.haha {
  background-color: rgb(42, 165, 52);
}
</style>
