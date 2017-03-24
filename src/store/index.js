import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		// 页面打开默认设置登录状态为否
		isLogin : false,
		// 保存用户信息
		userInfo : {},
		//token
		accessToken : '',
		//静态资源基础URL
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
		},
		setToken({commit}, token) {
			commit('SETTOKEN', token);
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
			state.userInfo = userInfo;
		},
		SETTOKEN (state, token) {
			state.accessToken = token;
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
			return state.accessToken;
		},
		getStaticPath(state) {
			return state.staticPath;
		},
		getFaceIcon(state) {
			return state.userInfo.faceIcon;
		}
	}
})

export default store;