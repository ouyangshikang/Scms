<template>
    <div class="home">
        <header-nav></header-nav>
        <div class="container">
            <div class="container-box">
                <!-- banner -->
                <div class="banner">
                    <el-carousel trigger="click" height="420px" arrow="always">
                        <el-carousel-item v-for="item in bannerImage" :key="item">
                            <img :src="item.url">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <!-- tab -->
                <div class="tab">
                    <el-tabs value="first" type="border-card">
                        <el-tab-pane label="公告" name="first">
                            <ul>
                                <li v-for="item in notice" :key="item" class="notice-list">
                                    {{item.info}}
                                </li>
                            </ul>
                            <a href="#" class="more">更多</a>
                        </el-tab-pane>
                        <el-tab-pane label="活动" name="second">
                            <ul>
                                <li v-for="item in activity" :key="item" class="activity-list">
                                    {{item.info}}
                                </li>
                            </ul>
                            <a href="#" class="more">更多</a>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <card :cardList="cardList"></card>

            <!-- 标准化输出 -->
            <pannel-model :pannelList="pannelList"></pannel-model>
            <!-- 中联风采 -->

            <!-- 加盟案例 -->

        </div>
        <!-- footer -->
        <footers></footers>
    </div>
</template>

<script>
import HeaderNav from '@/components/header';
import Card from '@/components/card';
import PannelModel from '@/components/pannel-model';
import Footers from '@/components/footer';
export default {
    name: 'Home',
    components: {
        HeaderNav,
        Card,
        PannelModel,
        Footers
    },
    data() {
        return {
            bannerImage: [{
                url: 'http://www.zhonglianzhirui.com:80/img/u/2018/01/11/IU76.jpg'
            }, {
                url: 'http://www.zhonglianzhirui.com:80/img/u/2017/11/15/TCUB.png'
            }, {
                url: 'http://www.zhonglianzhirui.com:80/img/u/2017/10/31/F7PN.png'
            }, {
                url: 'http://www.zhonglianzhirui.com:80/img/u/2017/10/23/65MF.jpg'
            }],
            // 公告信息
            notice: [{
                info: '中联睿智关于安心加盟网发是的我'
            }, {
                info: '中联睿智关于安心加盟网发...'
            }, {
                info: '中联睿智关于安心加盟网发...'
            }, {
                info: '中联睿智关于安心加盟网发...'
            }, {
                info: '中联睿智关于安心加盟网发...'
            }, {
                info: '中联睿智关于安心加盟网发...'
            }, {
                info: '中联睿智关于安心加盟网发...'
            }, {
                info: '中联睿智关于安心加盟网发...'
            }, {
                info: '中联睿智关于安心加盟网发...'
            }, {
                info: '中联睿智关于安心加盟网发...'
            }],
            // 活动信息
            activity: [{
                info: '如何加入中联智睿诚信联盟...'
            }, {
                info: '如何加入中联智睿诚信联盟...'
            }, {
                info: '如何加入中联智睿诚信联盟...'
            }, {
                info: '如何加入中联智睿诚信联盟...'
            }, {
                info: '如何加入中联智睿诚信联盟...'
            }, {
                info: '如何加入中联智睿诚信联盟...'
            }, {
                info: '如何加入中联智睿诚信联盟...'
            }, {
                info: '如何加入中联智睿诚信联盟...'
            }, {
                info: '如何加入中联智睿诚信联盟...'
            }, {
                info: '如何加入中联智睿诚信联盟...'
            }],
            // 卡片信息
            cardList: [{
                url: require('../../assets/img/card1.png'),
                title: '加盟实例',
                desc: '优势创造 专注目标'
            }, {
                url: require('../../assets/img/card2.png'),
                title: '资源整合',
                desc: '广阔视野 统筹全局'
            }, {
                url: require('../../assets/img/card3.png'),
                title: '资质荣誉',
                desc: '载誉累累 信赖认可'
            }, {
                url: require('../../assets/img/card4.png'),
                title: '团队介绍',
                desc: '携手共进 团队一心'
            }],
            // pannel info
            pannelList: [{
                title: '标准化输出',
                iconUrl: require('../../assets/img/icon1.png'),
                subPannel: [{
                    subTitle: '形象系统',
                    isCase: false,
                    url: require('../../assets/img/xxxt.png')
                }, {
                    subTitle: '业务系统',
                    isCase: false,
                    url: require('../../assets/img/ywxt.png')
                }, {
                    subTitle: '推广系统',
                    isCase: false,
                    url: require('../../assets/img/tgxt.png')
                }, {
                    subTitle: '营销系统',
                    isCase: false,
                    url: require('../../assets/img/yxxt.png')
                }]

            }, {
                title: '中联风采',
                iconUrl: require('../../assets/img/icon2.png'),
                subPannel: [{
                    subTitle: '办公环境',
                    isCase: false,
                    styleImage: [{
                        url: require('../../assets/img/bghj.png')
                    }, {
                        url: require('../../assets/img/dmfc.png')
                    }]
                }, {
                    subTitle: '店面风采',
                    isCase: false,
                    styleImage: [{
                        url: require('../../assets/img/dmfc.png')
                    }, {
                        url: require('../../assets/img/bghj.png')
                    }]
                }]
            }, {
                title: '加盟案例',
                iconUrl: require('../../assets/img/icon3.png'),
                subPannel: [{
                    subTitle: '网点分布',
                    isCase: true,
                    url: require('../../assets/img/wdfb.png')
                }, {
                    subTitle: '运作实例',
                    isCase: true,
                    url: require('../../assets/img/yzsl.png')
                }]
            }]
        };
    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
    .home {
        .container {
            background: #edecf1;
            width: 100%;
            padding-bottom: 60px;
            // height: 1900px;
            &-box {
                position: relative;
                margin: 0 auto;
                width: 1200px;
                .banner {
                    width: 750px;
                    height: 420px;
                    padding-top: 15px;
                    padding-left: 204px;
                    img {
                        width: 750px;
                        height: 420px;
                    }
                }
                .tab {
                    position: absolute;
                    top: 15px;
                    right: 0;
                    width: 230px;
                    .el-tabs--border-card {
                        border: none;
                        box-shadow: none;
                        height: 420px;
                        .el-tabs__item {
                            color:  #666666;
                            &.is-active {
                                color: #084a75;
                            }
                        }
                        .el-tabs__content {
                            ul {
                                padding-left: 8px;
                                padding-right: 10px;
                                li {
                                    width: 175px;
                                    line-height: 30px;
                                    font-size: 13px;
                                    color: #666666;
                                    letter-spacing: .8px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                            }
                            .more {
                                font-size: 13px;
                                color: #0079b7;
                                text-decoration: none;
                                display: block;
                                text-align: right;
                                padding-top: 25px;
                            }

                        }
                    }
                }
            }
        }
    }
</style>
