import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = resolve => {
    require.ensure(['../vue/login.vue'], () => {
        resolve(require('../vue/login.vue'));
    });
};

const personal = resolve => {
    require.ensure(['../vue/personal.vue'], () => {
        resolve(require('../vue/personal.vue'));
    });
}
const routes = [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/personal',
        name: 'personal',
        component: personal
    }, 

    {
        path: '*',
        component: login
    },];

export default new Router({
    mode: 'history',
    base: __dirname,
    routes
});