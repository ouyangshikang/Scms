<template>
    <div class="footer">
        <div class="footer-con">
            <ul class="footer-lf">
                <li v-for="item in subNav" :key="item">
                    <dl>
                        <dt>{{item.name}}</dt>
                        <dd v-for="subItem in item.child" :key="subItem">
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
                    <span>地址：北京市丰台区总部基地外环路26号院66号楼</span><br>
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
