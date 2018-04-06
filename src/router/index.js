import Vue from 'vue';
import Router from 'vue-router';
import Home from 'frontend/home';
import NewsList from 'frontend/news-list';
import NewsDetail from 'frontend/news-detail';

// 招商加盟
import zsjm from 'frontend/zsjm/index';
import jmlc from 'frontend/zsjm/jmlc';
import jmzc from 'frontend/zsjm/jmzc';
import ylfx from 'frontend/zsjm/ylfx';
// 加盟案例
import jmal from 'frontend/jmal/index';
import ddft from 'frontend/jmal/ddft';
import dmfc from 'frontend/jmal/dmfc';
import yzsl from 'frontend/jmal/yzsl';
import wdfb from 'frontend/jmal/wdfb';
// 新闻动态
import xwdt from 'frontend/xwdt/index';
import jmdt from 'frontend/xwdt/jmdt';
import mtbd from 'frontend/xwdt/mtbd';
import zbgg from 'frontend/xwdt/zbgg';
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
        },
        {
            path: '/jmal',
            name: '加盟案例',
            component: jmal,
            redirect: '/jmal/ddft',
            children: [{
                path: '/jmal/ddft',
                name: '店东访谈',
                component: ddft
            }, {
                path: '/jmal/dmfc',
                name: '店面风采',
                component: dmfc
            }, {
                path: '/jmal/yzsl',
                name: '运作实例',
                component: yzsl
            }, {
                path: '/jmal/wdfb',
                name: '网点分布',
                component: wdfb
            }]
        },
        {
            path: '/xwdt',
            name: '新闻动态',
            component: xwdt,
            redirect: '/xwdt/zbgg',
            children: [{
                path: '/xwdt/zbgg',
                name: '总部公告',
                component: zbgg
            }, {
                path: '/xwdt/mtbd',
                name: '媒体报道',
                component: mtbd
            }, {
                path: '/xwdt/jmdt',
                name: '加盟动态',
                component: jmdt
            }]
        }
    ]
});
