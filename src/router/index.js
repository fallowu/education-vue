import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = resolve => {
    require.ensure(['../vue/login.vue'], () => {
        resolve(require('../vue/login.vue'));
    });
};

const routes = [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '*',
        component: login
    }];

export default new Router({
    mode: 'history',
    base: __dirname,
    routes
});