import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = resolve => {
    require.ensure(['../vue/login.vue'], () => {
        resolve(require('../vue/login.vue'));
    });
};

const homepage = resolve => {
    require.ensure(['../vue/homepage.vue'], () => {
        resolve(require('../vue/homepage.vue'));
    });
};

const personal = resolve => {
    require.ensure(['../vue/personal.vue'], () => {
        resolve(require('../vue/personal.vue'));
    });
};

const courseTable = resolve => {
    require.ensure(['../vue/courseTable.vue'], () => {
        resolve(require('../vue/courseTable.vue'));
    });
};

const classPage = resolve => {
    require.ensure(['../vue/classPage.vue'], () => {
        resolve(require('../vue/classPage.vue'));
    });
};

const lesson = resolve => {
    require.ensure(['../vue/lesson.vue'], () => {
        resolve(require('../vue/lesson.vue'));
    });
};

const assignment = resolve => {
    require.ensure(['../vue/assignment.vue'], () => {
        resolve(require('../vue/assignment.vue'));
    });
};

const friend = resolve => {
    require.ensure(['../vue/friend.vue'], () => {
        resolve(require('../vue/friend.vue'));
    });
};


const routes = [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/homepage',
        name: 'homepage',
        component: homepage
    }, {
        path: '/personal',
        name: 'personal',
        component: personal
    }, {
        path: '/courseTable',
        name: 'courseTable',
        component: courseTable
    }, {
        path: '/lesson:id',
        name: 'lesson',
        component: lesson
    }, {
        path: '/classPage',
        name: 'classPage',
        component: classPage
    }, {
        path: '/assignment',
        name: 'assignment',
        component: assignment
    }, {
        path: '/friend',
        name: 'friend',
        component: friend
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