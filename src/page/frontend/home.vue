<template>
    <div class="home">
        <header-nav></header-nav>
        <div class="container">
            <div class="container-box">
                <div class="banner">
                    <el-carousel trigger="click" height="420px" arrow="always">
                        <el-carousel-item v-for="item in bannerImage" :key="item">
                            <img :src="item.url">
                        </el-carousel-item>
                    </el-carousel>
                </div>
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
        </div>
    </div>
</template>

<script>
import HeaderNav from '@/components/header';
export default {
    name: 'Home',
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
            }]
        };
    },
    components: {
        HeaderNav
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
            height: 900px;
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
