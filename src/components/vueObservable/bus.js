import Vue from "vue";
// 读取
const store = Vue.observable({
  moreInfoVisible: false,
  achievementList: [],
});
// 修改
const mutations = {
  setMoreInfoVisible(val) {
    store.moreInfoVisible = val;
  },
  setAchievementList(array) {
    store.achievementList = array;
  },
};
// 重置
const resetStore = {
  resetFunc() {
    store.moreInfoVisible = false;
    store.achievementList = [];
  },
};
export { store, mutations, resetStore };
