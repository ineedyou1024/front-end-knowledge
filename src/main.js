import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins';
import store from './store';

Vue.config.productionTip = false;
const vm = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
console.log(vm); // 查看vue的实例 看他挂载的router
