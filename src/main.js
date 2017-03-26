import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import axios from 'axios';
//import * as filters from './filters/index.js';

//开启debug模式
Vue.config.debug = true;

//引入css重置文件,基本的样式文件
require('./css/normalize.css');
require('./css/public.css');

//设置axios基本URL
axios.defaults.baseURL = 'https://education.lijingye.win/api/';
//全局加入headers
axios.interceptors.request.use(
	config =>	{    // 这里的config包含每次请求的内容
		if (store.getters.getToken) {
			config.headers.common['Authorization'] = store.getters.getToken;
		}
		return config;
	}, error => {
		return Promise.reject(err);
	});

axios.interceptors.response.use(
	response => {
		if(response.data.meta.ErrCode == '0x000003') {
			console.log('token outdated');
			store.commit('SIGNOUT');
			router.replace({
				path: '',
				query: {redirect: router.currentRoute.fullPath}
			})
		}
		return response;
	},
	error => {
		if (error.response) {
			router.replace({
				path: '',
				query: {redirect: router.currentRoute.fullPath}
			})

		}
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });


//整合axios
Vue.prototype.$ajax = axios;

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
	console.log('stored token: ' + window.localStorage.getItem('token'));
    store.dispatch('isLogin');
    store.dispatch('setToken', window.localStorage.getItem('token'));
}

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.getters.getLoginState) {  // 通过vuex state获取当前的token是否存在
        	next();
        }
        else {
        	next({
        		path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
    	next();
    }
})


// 遍历输出a过滤器的模块
//Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');