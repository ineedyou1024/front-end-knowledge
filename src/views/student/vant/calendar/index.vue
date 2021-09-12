<template>
    <div id="calendar-box">
        <!--
            :poppable="false"：平铺方式
            :show-confirm="false" 不显示确定按钮
            :style 日历高度
            formatter：时间格式化
            @confirm 点击日历触发的事件

         -->
        <van-calendar
            title="比赛日历"
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '500px' }"
            :formatter="formatter"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="selectDate"
        />
        <van-popup v-model="visible" position="top">
            <div
                v-for="(item, index) in list"
                :key="item.date + String(index)"
                class="main"
            >
                <p>{{ item.position }}</p>
                <div
                    v-for="(task, tin) in item.task"
                    :key="task.start + String(tin)"
                    class="task-row"
                >
                    <div class="place-col">
                        <span>{{ task.place }}</span>
                    </div>
                    <div class="time-col">
                        <div>{{ task.start }}</div>
                        <div>{{ task.end }}</div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { taskArrangement } from '@/mook/calendarData.js';
export default {
    name: 'Calendar',
    data () {
        return {
            dataList: [],
            visible: false,
            minDate: this.handleMinDate(),
            maxDate: this.handleMaxDate(),
            stampList: [],
            selectItem: ''
        };
    },
    computed: {
        list () {
            if (taskArrangement && taskArrangement.length) {
                let dataLiat = [];
                taskArrangement.forEach(item => {
                    if (item.date === this.selectItem) {
                        dataLiat = item.info;
                    }
                });
                return dataLiat;
            }
            return [];
        }
    },
    created () {
        console.log(taskArrangement);
        this.init();
    },
    methods: {
        init () {
            taskArrangement.forEach(item => {
                // 时间格式如果为2021-9-5 转换为2021/9/5
                item.date = item.date.replace(/-/g, '/');
            });
            // 时间戳数组
            this.stampList = taskArrangement.map(item => new Date(item.date).getTime());
            this.dataList = taskArrangement.map(item => {
                return {
                    date: item.date,
                    stamp: new Date(item.date).getTime()
                };
            });
        },
        formatter (day) {
            const time = day.date.getTime();
            this.dataList.forEach(item => {
                const taskDate = new Date(item.date);
                // 如果日历与数据中的日期一致就可以给个背景样式
                if (time === taskDate.getTime()) {
                    day.className = 'red-flag';
                }
            });
            return day;
        },
        selectDate (day) {
            const selectDay = new Date(day);
            const selectTime = selectDay.getTime();
            taskArrangement.forEach(item => {
                if (new Date(item.date).getTime() === selectTime) {
                    this.visible = true;
                    this.dataList.forEach(data => {
                        if (selectTime === data.stamp) {
                            this.selectItem = data.date;
                        }
                    });
                }
            });
        },
        handleMinDate () {
            this.init();
            let date = null;
            if (taskArrangement.length) {
                // 找到最小的时间戳
                const min = Math.min(...this.stampList);
                let minDay = null;
                this.dataList.forEach(item => {
                    if (item.stamp === min) minDay = item.date;
                });
                date = new Date(minDay);
                return this.handleDate(date);

            }
            // 如果一条数据没有，显示当前月份
            date = new Date();
            return this.handleDate(date);
        },
        handleDate (date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            return new Date(year, month, 1);
        },
        handleMaxDate () {
            this.init();
            let date = null;
            if (taskArrangement.length) {
                // 找到最大的时间戳
                const max = Math.max(...this.stampList);
                let maxDay = null;
                this.dataList.forEach(item => {
                    if (item.stamp === max) maxDay = item.date;
                });
                date = new Date(maxDay);
                const year = date.getFullYear();
                const month = date.getMonth();
                // 根据date获取当前月最后一天
                date.setDate(28);
                date.setMonth(date.getMonth() + 1);
                const lastDay = date.setDate(0);
                const date2 = new Date(lastDay).getDate();
                return new Date(year, month, date2);
            }
            // 如果一条数据没有，显示当前月份
            date = new Date();
            date.setDate(28);
            date.setMonth(date.getMonth() + 1);
            const lastDay = date.setDate(0);
            const date2 = new Date(lastDay).getDate();
            return new Date(date.getFullYear(), date.getMonth(), date2);

        }
    },
};
</script>

<style lang="less" scoped>
::v-deep .red-flag {
    background: #fa6861;
}
.task-row {
    display: flex;
    .place-col {
        flex: 1;
        display: flex;
        align-items: center;
    }
    .time-col {
        width: 80px;
    }
}
.main {
    padding: 0 10px;
}
</style>
