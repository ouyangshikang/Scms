<template>
    <div class="jmdt">
        <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>要闻快递</el-breadcrumb-item>
                <el-breadcrumb-item>联系我们</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="news-content">
            <div class="content">
                <h1>{{article.title}}</h1>
                <article v-html="article.content"></article>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            article: {
                title: '联系我们',
                content: `
                <pre>
                总部名称：中联智睿诚信联盟

                地址：北京市海淀区紫竹桥路华澳中心2008室

                联系电话：400-845-7775  010-53386238

                中联智睿诚信联盟联合创始单位名录：

                北京：
                
                北京中联智睿国际市场调查有限公司(创始人：王卫臻)          北京博维时代知识产权代理有限公司(创始人：张勇)
                
                迈驰信（北京）征信有限公司(创始人：梁路雨)                      北京炜智律师事务所(创始人：余江)
                
                山西：
                
                山西中联智睿企业管理咨询有限公司(创始人：董剑)              山西中联智睿网络科技有限公司(创始人：顾能忠)
                
                太原市和谐心心理咨询有限责任公司(创始人：吕军)
                
                浙江：
                
                浙江智睿信用服务管理有限公司(创始人：孟德胜)
                
                广东：
                
                深圳市神洲企业管理顾问有限责任公司(创始人：王治堂)     深圳汇金海资产管理有限公司(创始人：王治堂)
                
                四川：
                
                成都嘉德瑞企业管理有限公司(创始人：贾仲生)
                
                重庆：
                
                重庆迪泰克非企业管理咨询有限责任公司(创始人：王忠党)
                
                上海：
                
                上海精细商务咨询有限责任公司(创始人：麻飚勇)
                
                福建：
                
                福建邦德调查（香港注册）(创始人：谢逅京)
                
                广西：
                
                广西南宁市探针商务信息咨询有限责任公司(创始人：陈志)
                
                湖北：
                
                荆州市蓝邦商务调查事务所(创始人：刘贵)
                
                新疆：
                
                新疆信联天下企业管理咨询有限公司(创始人：王刚)
                
                山东：
                
                济南竹福音商贸有限责任公司(创始人：陈大军)
                
                陕西：
                
                陕西铭鼎企业管理咨询有限责任公司(创始人：陈绍峰)
                
                辽宁：
                
                营口隆顺达网络科技有限责任公司(创始人：李清顺)
                
                江苏：
                
                南京成代汇财务管理有限责任公司(创始人：邵康)
                
                江苏无锡百策法律咨询服务公司(创始人：高逸中)
                
                苏州巿元瑞投资管理有限公司(创始人：刘飚)
                
                河北：
                
                石家庄睿虎商务咨询中心(创始人：闫宝良) 
                
                河南：           
                
                郑州联邦商务信息咨询有限公司(创始人：郑传里)
                
                云南：
                
                昆明清友商务咨询有限责任公司(创始人：刘沛友)
                
                贵州：
                
                贵州丰恒德企业管理有限责任公司(创始人：陈德)
                
                江西：
                
                上饶市诚信商务咨询有限责任公司(创始人：张智青)
                </pre>
                `
            }
        };
    },
    methods: {

    }
};
</script>

<style lang="scss">
.jmdt {
    .news-content {
        width: 1200px;
        // height: 900px;
        background: #ffffff;
        .content {
            min-height: 500px;
            width: 1036px;
            padding: 60px 82px;
            h1, h5 {
                text-align: center;
            }
            h1 {
                font-size: 24px;
            }

            article {
                font-size: 14px;
                letter-spacing: .8px;
                p {
                    line-height: 28px;
                    margin-top: 20px;
                }
            }
        }
    }
}
</style>
