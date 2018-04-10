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
// 要闻快递
import ywkd from 'frontend/ywkd/index';
import xxxc from 'frontend/ywkd/xxxc';
// 关于我们
import gywm from 'frontend/gywm/index';
import gsjs from 'frontend/gywm/gsjs';
import zytd from 'frontend/gywm/zytd';
import zzry from 'frontend/gywm/zzry';
import bghj from 'frontend/gywm/bghj';
import contact from 'frontend/gywm/contact';

// 体验式加盟
import tysjm from 'frontend/tysjm/index';
import msjd from 'frontend/tysjm/msjd';
import hxys from 'frontend/tysjm/hxys';
import tysl from 'frontend/tysjm/tysl';
// 管家式服务
import gjsfw from 'frontend/gjsfw/index';
import tdjg from 'frontend/gjsfw/tdjg';
import fwtx from 'frontend/gjsfw/fwtx';
import fwfc from 'frontend/gjsfw/fwfc';
// 标准化输出
import bzhsc from 'frontend/bzhsc/index';
import xxxt from 'frontend/bzhsc/xxxt';
import ywxt from 'frontend/bzhsc/ywxt';
import yxxt from 'frontend/bzhsc/yxxt';
import tgxt from 'frontend/bzhsc/tgxt';
// 规范化管理
import gfhgl from 'frontend/gfhgl/index';
import zlgy from 'frontend/gfhgl/zlgy';
import dcxd from 'frontend/gfhgl/dcxd';
// 资源整合圈
import zyzhq from 'frontend/zyzhq/index';
import xxzy from 'frontend/zyzhq/xxzy';
import syzy from 'frontend/zyzhq/syzy';
import rmzy from 'frontend/zyzhq/rmzy';

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
        },
        {
            path: '/ywkd',
            name: '要闻快递',
            component: ywkd,
            children: [{
                path: '/ywkd/xxxc',
                name: '形象宣传',
                component: xxxc
            }]
        },
        {
            path: '/gywm',
            name: '关于我们',
            component: gywm,
            children: [{
                path: '/gywm/gsjs',
                name: '公司介绍',
                component: gsjs
            }, {
                path: '/gywm/zytd',
                name: '专业团队',
                component: zytd
            }, {
                path: '/gywm/zzry',
                name: '资质荣誉',
                component: zzry
            }, {
                path: '/gywm/bghj',
                name: '办公环境',
                component: bghj
            }, {
                path: '/gywm/contact',
                name: '联系我们',
                component: contact
            }]
        },
        {
            path: '/tysjm',
            name: '体验式加盟',
            component: tysjm,
            children: [{
                path: '/tysjm/msjd',
                name: '模式解读',
                component: msjd
            }, {
                path: '/tysjm/hxys',
                name: '核心优势',
                component: hxys
            }, {
                path: '/tysjm/tysl',
                name: '体验实例',
                component: tysl
            }]
        },
        {
            path: '/gjsfw',
            name: '管家式服务',
            component: gjsfw,
            children: [{
                path: '/gjsfw/tdjg',
                name: '团队架构',
                component: tdjg
            }, {
                path: '/gjsfw/fwtx',
                name: '服务体系',
                component: fwtx
            }, {
                path: '/gjsfw/fwfc',
                name: '服务风采',
                component: fwfc
            }]
        },
        {
            path: '/bzhsc',
            name: '标准化输出',
            component: bzhsc,
            children: [{
                path: '/bzhsc/xxxt',
                name: '形象系统',
                component: xxxt
            }, {
                path: '/bzhsc/ywxt',
                name: '业务系统',
                component: ywxt
            }, {
                path: '/bzhsc/tgxt',
                name: '推广系统',
                component: tgxt
            }, {
                path: '/bzhsc/yxxt',
                name: '营销系统',
                component: yxxt
            }]
        },
        {
            path: '/gfhgl',
            name: '规范化管理',
            component: gfhgl,
            children: [{
                path: '/gfhgl/zlgy',
                name: '自律公约',
                component: zlgy
            }, {
                path: '/gfhgl/dcxd',
                name: '督查行动',
                component: dcxd
            }]
        },
        {
            path: '/zyzhq',
            name: '资源整合圈',
            component: zyzhq,
            children: [{
                path: '/zyzhq/xxzy',
                name: '信息资源',
                component: xxzy
            }, {
                path: '/zyzhq/syzy',
                name: '商业资源',
                component: syzy
            }, {
                path: '/zyzhq/rmzy',
                name: '人脉资源',
                component: rmzy
            }]
        }
    ]
});
