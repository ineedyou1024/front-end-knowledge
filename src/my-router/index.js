// 模拟vue-router
let _Vue = null;
export default class MyRouter {
    static install (Vue) {
        // 判断当前插件是否被安装
        if (MyRouter.install.installed) {
            return;
        }
        MyRouter.install.installed = true;
        // 把Vue构造函数记录到全局变量
        _Vue = Vue;
        // 把创建Vue实例时候传入的router对象注入到Vue实例上
        // 混入
        _Vue.mixin({
            beforeCreate () {
                if (this.$options.router) {
                    _Vue.prototype.$router = this.$options.router;
                }
            }
        });
    }
    constructor (options) {
        this.options = options;
        this.routeMap = {};
        this.data = _Vue.observable({
            current: '/'
        });
        this.init();
    }
    init () {
        this.createRouteMap();
        this.initComponents(_Vue);
        this.initEvent();
    }
    createRouteMap () {
        // 遍历所有的路由规则，把路由规则解析成键值对的形式，存储到routeMap对象中
        this.options.routes.forEach(route => {
            this.routeMap[route.path] = route.component;
        });
    }
    initComponents (Vue) {
        Vue.component('router-link', {
            props: {
                to: String
            },
            // template: '<a :href="to"><slot></slot></a>'
            render (h) {
                return h('a', {
                    attrs: {
                        href: this.to
                    },
                    on: {
                        click: this.clickHandler
                    }
                }, [this.$slots.default]);
            },
            methods: {
                clickHandler (e) {
                    history.pushState({}, '', this.to);
                    this.$router.data.current = this.to;
                    e.preventDefault();
                }
            }
        });
        const self = this;
        Vue.component('router-view', {
            render (h) {
                // 根据路由获取组件
                const compont = self.routeMap[self.data.current];
                return h(compont);
            }
        });
    }
    // 浏览器的后退时，url变化了，那个组件渲染没有改变
    initEvent () {
        window.addEventListener('popstate', () => {
            this.data.current = window.location.pathname;
        });
    }
}
