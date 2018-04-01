import Vue from 'vue';
import Router from 'vue-router';
import Home from 'frontend/home';
import NewsList from 'frontend/news-list';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/news-list',
            name: 'NewsList',
            component: NewsList
        }
    ]
});
