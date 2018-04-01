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
                        <li v-for="item in subNav" :key="item.name">
                            <span>{{item.name}}</span>
                            <i class="iconfont icon-arrow-right"></i>
                            <ul class="nav-list__vertical-hover">
                                <li v-for="subItem in item.child" :key="subItem.name">
                                    {{subItem.name}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li v-for="item in navArr" class="nav-list__horizon" :key="item.name">
                    <span>{{item.name}}</span>
                    <i v-if="item.child" class="iconfont icon-arrow"></i>
                    <ul class="nav-list__horizon-hover">
                        <li v-for="subItem in item.child" :key="subItem.name">
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
                name: '首页'
            }, {
                name: '招商加盟',
                child: [{
                    name: '加盟政策'
                }, {
                    name: '盈利分析'
                }, {
                    name: '加盟流程'
                }]
            }, {
                name: '加盟案例',
                child: [{
                    name: '店东访谈'
                }, {
                    name: '运作实例'
                }, {
                    name: '店面风采'
                }, {
                    name: '网点分布'
                }]
            }, {
                name: '新闻动态',
                child: [{
                    name: '总部公告'
                }, {
                    name: '媒体报道'
                }, {
                    name: '加盟动态'
                }]
            }, {
                name: '要闻快递',
                child: [{
                    name: '形象宣传'
                }, {
                    name: '联系我们'
                }]
            }, {
                name: '关于我们'
            }],
            // 连锁运营体系
            subNav: [{
                name: '体验式加盟',
                child: [{
                    name: '模式解读'
                }, {
                    name: '核心优势'
                }, {
                    name: '体验实例'
                }]
            }, {
                name: '管家式服务',
                child: [{
                    name: '团队架构'
                }, {
                    name: '服务体系'
                }, {
                    name: '服务风采'
                }]
            }, {
                name: '标准化输出',
                child: [{
                    name: '形象系统'
                }, {
                    name: '业务系统'
                }, {
                    name: '推广系统'
                }, {
                    name: '营销系统'
                }]
            }, {
                name: '规范化管理',
                child: [{
                    name: '自律公约'
                }, {
                    name: '督查行动'
                }]
            }, {
                name: '资源整合圈',
                child: [{
                    name: '信息资源'
                }, {
                    name: '商业资源'
                }, {
                    name: '人脉资源'
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
                    width: 162px;
                    &-hover {
                        display: none;
                        position: absolute;
                        top: 60px;
                        width: 162px;
                        background: rgba(255, 255, 255, 0.8);
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
