<template>
    <div class="footer">
        <div class="footer-con">
            <ul class="footer-lf">
                <li v-for="item in subNav" :key="item.name">
                    <dl>
                        <dt>{{item.name}}</dt>
                        <dd
                            v-for="subItem in item.child"
                            :key="subItem.name"
                            @click.stop="openRoute(subItem)"
                        >
                            {{subItem.name}}
                        </dd>
                    </dl>
                </li>
            </ul>

            <div class="seperator"></div>

            <div class="footer-rt">
                <p>
                    <span>全国统一加盟热线：</span><br>
                    <span class="bigBlue">400-845-7775</span><br>
                    <span>地址：北京市朝阳区呼家楼街道光华路9号SOHO²</span><br>
                    <span>E-mail：info@zhonglianzhirui.com</span><br>
                    <span>京ICP备：17044859号-1</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
                child: [{
                    name: '团队架构',
                    route: '/gjsfw/tdjg'
                }, {
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
                route: '/zyzhq',
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
        openRoute(item) {
            this.$router.push({
                path: `${item.route}`
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 228px;
    &-con {
        width: 1200px;
        margin: 0 auto;
    }
    &-lf {
        width: 700px;
        float: left;
        margin-top: 8px;
        li {
            width: 84px;
            float: left;
            margin-left: 56px;
            // display: inline;
            line-height: 200%;
            dl > dt {
                font-size: 16px;
                color: #666666;
                margin-bottom: 10px;
                margin-top: 35px;
            }
            dd {
                font-size: 13px;
                color: #999999;
                line-height: 30px;
                cursor: pointer;
                &:hover {
                    color: #0079b7;
                }
            }
        }
    }
    .seperator {
        width: 1px;
        height: 136px;
        background: #e1e1e6;
        float: left;
        margin-top: 50px;
        margin-left: 55px;
    }
    &-rt{
        float: left;
        margin-top: 40px;
        margin-left: 60px;
        text-align: left;
        p {
            line-height: 30px;
            color: #666666;
            span {
                font-size: 13px;
                &.bigBlue {
                    font-size: 32px;
                    color: #0079b7;
                }
            }
        }
    }
}
</style>
