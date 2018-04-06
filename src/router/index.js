import Vue from 'vue';
import Router from 'vue-router';
import Home from 'frontend/home';
import NewsList from 'frontend/news-list';
import NewsDetail from 'frontend/news-detail';

import zsjm from 'frontend/zsjm/index';
import jmlc from 'frontend/zsjm/jmlc';
import jmzc from 'frontend/zsjm/jmzc';
import ylfx from 'frontend/zsjm/ylfx';
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
        },
        {
            path: '/news-detail',
            name: 'NewsDetail',
            component: NewsDetail
        },
        {
            path: '/zsjm',
            name: '招商加盟',
            component: zsjm,
            redirect: '/zsjm/jmlc',
            children: [{
                path: 'jmlc',
                name: '加盟流程',
                component: jmlc
            }, {
                path: 'jmzc',
                name: '加盟政策',
                component: jmzc
            }, {
                path: 'ylfx',
                name: '盈利分析',
                component: ylfx
            }]
        }
    ]
});
