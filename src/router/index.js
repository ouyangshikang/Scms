import Vue from 'vue';
import Router from 'vue-router';
import Home from 'frontend/home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
});
