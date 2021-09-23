import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default function () {
    const store = new Vuex.Store({
        state: {
            myMoney: 100,
            routeIndex: 0,
        },
        mutations: {
            currentRoute (state, val) {
                state.routeIndex = val;
            }
        }
    });
    return store;
}
