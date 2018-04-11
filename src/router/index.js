import Vue from 'vue';
import Router from 'vue-router';
import Home from 'frontend/home';
import NewsList from 'frontend/news-list';
import NewsDetail from 'frontend/news-detail';

// 招商加盟
const zsjm = () => import('frontend/zsjm/index');
const jmlc = () => import('frontend/zsjm/jmlc');
const jmzc = () => import('frontend/zsjm/jmzc');
const ylfx = () => import('frontend/zsjm/ylfx');

// 加盟案例
const jmal = () => import('frontend/jmal/index');
const ddft = () => import('frontend/jmal/ddft');
const dmfc = () => import('frontend/jmal/dmfc');
const yzsl = () => import('frontend/jmal/yzsl');
const wdfb = () => import('frontend/jmal/wdfb');

// 新闻动态
const xwdt = () => import('frontend/xwdt/index');
const jmdt = () => import('frontend/xwdt/jmdt');
const mtbd = () => import('frontend/xwdt/mtbd');
const zbgg = () => import('frontend/xwdt/zbgg');

// 要闻快递
const ywkd = () => import('frontend/ywkd/index');
const xxxc = () => import('frontend/ywkd/xxxc');

// 关于我们
const gywm = () => import('frontend/gywm/index');
const gsjs = () => import('frontend/gywm/gsjs');
const zytd = () => import('frontend/gywm/zytd');
const zzry = () => import('frontend/gywm/zzry');
const bghj = () => import('frontend/gywm/bghj');
const contact = () => import('frontend/gywm/contact');

// 体验式加盟
const tysjm = () => import('frontend/tysjm/index');
const msjd = () => import('frontend/tysjm/msjd');
const hxys = () => import('frontend/tysjm/hxys');
const tysl = () => import('frontend/tysjm/tysl');

// 管家式服务
const gjsfw = () => import('frontend/gjsfw/index');
const tdjg = () => import('frontend/gjsfw/tdjg');
const fwtx = () => import('frontend/gjsfw/fwtx');
const fwfc = () => import('frontend/gjsfw/fwfc');

// 标准化输出
const bzhsc = () => import('frontend/bzhsc/index');
const xxxt = () => import('frontend/bzhsc/xxxt');
const ywxt = () => import('frontend/bzhsc/ywxt');
const yxxt = () => import('frontend/bzhsc/yxxt');
const tgxt = () => import('frontend/bzhsc/tgxt');

// 规范化管理
const gfhgl = () => import('frontend/gfhgl/index');
const zlgy = () => import('frontend/gfhgl/zlgy');
const dcxd = () => import('frontend/gfhgl/dcxd');

// 资源整合圈
const zyzhq = () => import('frontend/zyzhq/index');
const xxzy = () => import('frontend/zyzhq/xxzy');
const syzy = () => import('frontend/zyzhq/syzy');
const rmzy = () => import('frontend/zyzhq/rmzy');

// 后台管理界面
const login = () => import('backend/login');

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
        },
        {
            path: '/manage/login',
            name: '登录',
            component: login
        }
    ]
});
