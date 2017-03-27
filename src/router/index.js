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

const lesson = resolve => {
    require.ensure(['../vue/lesson.vue'], () => {
        resolve(require('../vue/lesson.vue'));
    });
};

const course = resolve => {
    require.ensure(['../vue/course.vue'], () => {
        resolve(require('../vue/course.vue'));
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

const home = resolve => {
    require.ensure(['../vue/home.vue'], () => {
        resolve(require('../vue/home.vue'));
    });
};


const routes = [{
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/homepage',
        name: 'homepage',
        meta : {
            requireAuth : true
        },
        component: homepage
    }, {
        path: '/personal',
        name: 'personal',
        meta : {
            requireAuth : true
        },
        component: personal
    }, {
        path: '/courseTable',
        name: 'courseTable',
        meta : {
            requireAuth : true
        },
        component: courseTable
    }, {
        path: '/lesson/:id',
        name: 'lesson',
        meta : {
            requireAuth : true
        },
        component: lesson
    }, {
        path: '/course',
        name: 'course',
        meta : {
            requireAuth : true
        },
        component: course
    }, {
        path: '/assignment',
        name: 'assignment',
        meta : {
            requireAuth : true
        },
        component: assignment
    }, {
        path: '/friend',
        name: 'friend',
        meta : {
            requireAuth : true
        },
        component: friend
    }, {
        path: '/home',
        name: 'home',
        meta : {
            requireAuth : true
        },
        component: home
    }, 

    {
        path: '*',
        meta : {
            requireAuth : true
        },
        component: homepage
    },];

export default new Router({
    mode: 'history',
    base: __dirname,
    routes
});