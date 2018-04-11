<template>
    <div class="header-nav">
        <div class="logo">
            <div class="logo-left">
                <img src="../assets/img/logo.png" alt="中联智睿">
                <span class="separator"></span>
                <img src="../assets/img/logo_desc.png" alt="体验式加盟，我们的成功你可以复制">
            </div>
            <div class="logo-right">
                <img src="../assets/img/logo_tel.png" alt="加盟热线">
            </div>
        </div>

        <div class="nav">
            <ul class="nav-list">
                <li class="nav-list__vertical" @mouseover="showNav" @mouseout="hideNav">
                    <i class="iconfont icon-tubiao113"></i>
                    <span>连锁运营体系</span>
                    <ul class="nav-list__vertical-fixed" v-show="showNavs">
                        <li
                            v-for="item in subNav"
                            :key="item.name"
                        >
                            <span>{{item.name}}</span>
                            <i class="iconfont icon-arrow-right"></i>
                            <ul class="nav-list__vertical-hover">
                                <li
                                    v-for="subItem in item.child"
                                    :key="subItem.name"
                                    @click.stop="openRoute(subItem)"
                                >
                                    {{subItem.name}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="nav-list__horizon" @click="openRoute()">
                    <span>首页</span>
                </li>
                <li
                    v-for="item in navArr"
                    class="nav-list__horizon"
                    :key="item.name"
                >
                    <span>{{item.name}}</span>
                    <i v-if="item.child" class="iconfont icon-arrow"></i>
                    <ul class="nav-list__horizon-hover">
                        <li
                            v-for="subItem in item.child"
                            :key="subItem.name"
                            @click.stop="openRoute(subItem)"
                        >
                            {{subItem.name}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header-nav',
    props: {
        isHome: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            showNavs: true,
            navArr: [{
                name: '招商加盟',
                route: '/zsjm',
                child: [{
                    name: '加盟政策',
                    route: '/zsjm/jmzc'
                }, {
                    name: '盈利分析',
                    route: '/zsjm/ylfx'
                }, {
                    name: '加盟流程',
                    route: '/zsjm/jmlc'
                }]
            }, {
                name: '加盟案例',
                route: '/jmal',
                child: [
                    // {
                    //     name: '店东访谈',
                    //     route: '/jmal/ddft'
                    // },
                    {
                        name: '运作实例',
                        route: '/jmal/yzsl'
                    }, {
                        name: '店面风采',
                        route: '/jmal/dmfc'
                    }, {
                        name: '网点分布',
                        route: '/jmal/wdfb'
                    }]
            },
            // {
            //     name: '新闻动态',
            //     route: '/xwdt',
            //     child: [{
            //         name: '总部公告',
            //         route: '/xwdt/zbgg'
            //     }, {
            //         name: '媒体报道',
            //         route: '/xwdt/mtbd'
            //     }, {
            //         name: '加盟动态',
            //         route: '/xwdt/jmdt'
            //     }]
            // }, {
            //     name: '要闻快递',
            //     route: '/ywkd',
            //     child: [{
            //         name: '形象宣传',
            //         route: '/ywkd/xxxc'
            //     }]
            // },
            {
                name: '关于我们',
                route: '/gywm',
                child: [{
                    name: '公司介绍',
                    route: '/gywm/gsjs'
                }, {
                    name: '专业团队',
                    route: '/gywm/zytd'
                }, {
                    name: '资质荣誉',
                    route: '/gywm/zzry'
                }, {
                    name: '办公环境',
                    route: '/gywm/bghj'
                }, {
                    name: '联系我们',
                    route: '/gywm/contact'
                }]
            }],
            // 连锁运营体系
            subNav: [{
                name: '体验式加盟',
                route: '/tysjm',
                child: [{
                    name: '模式解读',
                    route: '/tysjm/msjd'
                }, {
                    name: '核心优势',
                    route: '/tysjm/hxys'
                }, {
                    name: '体验实例',
                    route: '/tysjm/tysl'
                }]
            }, {
                name: '管家式服务',
                route: '/gjsfw',
                child: [
                    // {
                    //     name: '团队架构',
                    //     route: '/gjsfw/tdjg'
                    // },
                    {
                        name: '服务体系',
                        route: '/gjsfw/fwtx'
                    }, {
                        name: '服务风采',
                        route: '/gjsfw/fwfc'
                    }]
            }, {
                name: '标准化输出',
                route: '/bzhsc',
                child: [{
                    name: '形象系统',
                    route: '/bzhsc/xxxt'
                }, {
                    name: '业务系统',
                    route: '/bzhsc/ywxt'
                }, {
                    name: '推广系统',
                    route: '/bzhsc/tgxt'
                }, {
                    name: '营销系统',
                    route: '/bzhsc/yxxt'
                }]
            }, {
                name: '规范化管理',
                route: '/gfhgl',
                child: [{
                    name: '自律公约',
                    route: '/gfhgl/zlgy'
                }, {
                    name: '督查行动',
                    route: '/gfhgl/dcxd'
                }]
            }, {
                name: '资源整合圈',
                route: '/zyzhq/zyzhq',
                child: [
                    // {
                    //     name: '信息资源',
                    //     route: '/zyzhq/xxzy'
                    // }, {
                    //     name: '商业资源',
                    //     route: '/zyzhq/syzy'
                    // },
                    {
                        name: '人脉资源',
                        route: '/zyzhq/rmzy'
                    }]
            }]
        };
    },
    methods: {
        showNav() {
            if (!this.isHome) {
                this.showNavs = true;
            }
        },
        hideNav() {
            if (!this.isHome) {
                this.showNavs = false;
            }
        },
        openRoute(item) {
            if (!item) {
                this.$router.push({path: '/'});
            } else {
                this.$router.push({
                    path: `${item.route}`
                });
            }
        }

    },
    mounted() {
        this.showNavs = this.isHome;
    }
};
</script>

<style lang="scss">
    @import '../assets/css/font.scss';
    .header-nav {
        .logo {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            height: 128px;
            width: 1200px;
            &-left {
                display: flex;
                align-items: center;
                .separator {
                    margin-left: 30px;
                    margin-right: 30px;
                    border: 1px solid #d7d9da;
                    height: 49px;
                }
            }
            &-right {
                display: flex;
            }
        }
        .nav {
            width: 100%;
            background: #0079b7;
            &-list {
                display: flex;
                width: 1200px;
                height: 60px;
                margin: auto;
                color: #ffffff;
                &__vertical, &__horizon{
                    position: relative;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 188px;
                    height: 60px;
                    font-size: 16px;
                    cursor: pointer;
                }
                &__vertical {
                    background: #095688;
                    // &:hover  .nav-list__vertical-fixed{
                    //     display: block;
                    // }
                    & > i {
                        font-size: 21px;
                        margin-right: 10px;
                    }
                    &-hover {
                        display: none;
                        position: absolute;
                        top: 0;
                        left: 188px;
                        width: 188px;
                        background: #ffffff;
                        z-index: 100;
                    }
                    &-fixed {
                        position: absolute;
                        top: 60px;
                        width: 188px;
                        background: #ffffff;
                        z-index: 100;
                        li {
                            position: relative;
                            padding: 20px 27px;
                            text-align: center;
                            color: #666666;
                            &:hover {
                                // background: #f5f5fa;
                                color: #0079b7;
                                .nav-list__vertical-hover {
                                    display: block;
                                }
                            }
                            & > i {
                                margin-left: 26px;
                            }
                        }
                        & > li {
                            padding: 35px 27px;
                            border-top: 1px solid #efeff3;
                            &:hover {
                                background: #f5f5fa;
                            }
                        }
                    }
                }
                &__horizon {
                    // background: #f5f5fa;
                    // width: 162px;
                    flex-basis: 162px;
                    flex-grow: 1;
                    &-hover {
                        display: none;
                        position: absolute;
                        top: 60px;
                        width: 100%;
                        background: rgba(255, 255, 255, 0.85);
                        z-index: 99;
                        li {
                            padding: 20px 40px;
                            text-align: center;
                            color: #666666;
                            &:hover {
                                color: #0079b7;
                            }
                        }
                    }
                    &:hover {
                        background: #f5f5fa;
                        color: #0079b7;
                        .nav-list__horizon-hover {
                            display: block;
                        }
                    }
                    & > i {
                        margin-left: 5px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
