import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		// 页面打开默认设置登录状态为否
		isLogin : false,
		// 保存登录信息
		userInfo : {
			'id' : '',
			'accessToken' : ''
		},
		staticPath : 'https://education.lijingye.win/Education'
	},
	actions: {
		isLogin({commit}) {
			commit('ISLOGIN');
		},
		signOut({commit}) {
			commit('SIGNOUT');
		},
		setUserInfo({commit}, userInfo) {
			commit('SETUSERINFO', userInfo);
		}
	},
	mutations: {
		// 设置登录
		ISLOGIN (state) {
			state.isLogin = true;
		},
		// 退出登录
		SIGNOUT (state) {
			state.isLogin = false;
		},
		SETUSERINFO (state, userInfo) {
			state.userInfo.id = userInfo.id;
			state.userInfo.accessToken = userInfo.accessToken;
		}
	},
	getters: {
		getLoginState (state) {
			return state.isLogin;
		},
		getUserInfo (state) {
			return state.userInfo;
		},
		getToken(state) {
			return state.userInfo.accessToken;
		},
		getStaticPath(state) {
			return state.staticPath;
		}
	}
})

export default store;