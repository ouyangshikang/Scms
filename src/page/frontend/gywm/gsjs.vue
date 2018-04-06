<template>
   <div class="gsjs">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>关于我们</el-breadcrumb-item>
                <el-breadcrumb-item>公司介绍</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <div class="content">
                <article v-html="article"></article>
            </div>
            <img src="../../../assets/img/gsjs_2.png">
        </div>
   </div>
</template>

<script>

export default {
    name: 'gsjs',
    components: {

    },
    data() {
        return {
            article: `<p>中联智睿拥是中国市场领先的研究报告和商业情报提供商。</p>
                    <p>中联智睿通过国家相关统计机构、各地区行业机构以及自身强大的调研团队等多方面渠道，为您提供权威、精准的数据信息及全面、
                    客观的商业情报，以及商业情报保护、反制、溯源。中联智睿集合各行业内知名专家、各大高校教授学者、资深报告研究员等多方面人士参与报告的编撰工作，
                    为您提供更真实可信的研究报告及商业情报。作为中华人民共和国国家统计局涉外调查许可单位，不仅服务于中国国内企业，也帮助国外企业在中国市场取得更大的成功。</p>
                    <p>中联智睿专注于产业研究，立足国内，面向国外，为各行业客户提供市场情报研究和商业情报。为企业中高层管理人员、企事业发展研究部门人员、市场投资人
士、投行及咨询行业人士、投资专家等提供各行业丰富详实的市场研究资料和商业情报。为国内外的行业企业、研究机构、社会团体和政府部门提供专业的行业
市场研究、商业分析、投资咨询、市场战略咨询等服务</p>
                    <p>中联智睿已经为数万家包括政府机构、银行、研究所、行业协会、咨询公司、集团公司和各类投资公司在内的单位提供了专业的投资咨询、信息咨询及研究报告
服务，并得到客户的广泛认可。</p>`
        };
    },
    methods: {

    }
};
</script>

<style lang="scss">
.gsjs {
    .banner {
        width: 1200px;
        height: 380px;
        background: url('../../../assets/img/gsjs_1.png') no-repeat;
        background-size: cover;
    }
    .listview {
        padding: 27px 80px 0;
        text-align: center;
        img {
            width: 614px;
            height: 502px;
            margin-bottom: 84px;
            margin-top: 60px;
        }
        .content {
            article {
                text-align: left;
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
