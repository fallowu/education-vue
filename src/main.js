import Vue from 'vue';
import router from './router';
import App from './App.vue';
//import * as filters from './filters/index.js';

//引入css重置文件,基本的样式文件
require('./css/normalize.css');

// 遍历输出a过滤器的模块
//Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');