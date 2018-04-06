<template>
    <div class="news-detail">
        <header-nav :isHome="false"></header-nav>
        <div class="container">
           <div class="container-box">
               <div class="current-location">
                    <span class="location-title">当前位置 :</span>&nbsp;
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">新闻动态</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/' }">总部公告</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="news-content">
                    <div class="content">
                        <h1>{{article.title}}</h1>
                        <h5 class="date">{{article.date}}</h5>
                        <article v-html="article.content"></article>
                    </div>
                    <div class="related-link">
                        <span>
                            上一篇:
                            <a href="#">关于加盟商“完胜金秋回炉培</a>
                        </span>
                        <span>
                            下一篇:
                            <a href="#">关于加盟商“完胜金秋回炉培</a>
                        </span>
                    </div>
                </div>
           </div>
           <back-top></back-top>
       </div>
       <footers></footers>
    </div>
</template>

<script>
import HeaderNav from '@/components/header';
import Footers from '@/components/footer';
import BackTop from '@/components/back-top';

export default {
    name: 'news-list',
    components: {
        HeaderNav,
        Footers,
        BackTop
    },
    data() {
        return {
            article: {
                title: '关于安心加盟网发布虚假加盟费用的公告说明',
                date: '2017/11/14 15:30:06',
                content: `<p>中联智睿拥是中国市场领先的研究报告和商业情报提供商。</p>
                    <p>中联智睿通过国家相关统计机构、各地区行业机构以及自身强大的调研团队等多方面渠道，为您提供权威、精准的数据信息及全面、客观的商业情报，以及商业
情报保护、反制、溯源。中联智睿集合各行业内知名专家、各大高校教授学者、资深报告研究员等多方面人士参与报告的编撰工作，为您提供更真实可信的研究
报告及商业情报。作为中华人民共和国国家统计局涉外调查许可单位，不仅服务于中国国内企业，也帮助国外企业在中国市场取得更大的成功。</p>
                    <p>中联智睿专注于产业研究，立足国内，面向国外，为各行业客户提供市场情报研究和商业情报。为企业中高层管理人员、企事业发展研究部门人员、市场投资人
士、投行及咨询行业人士、投资专家等提供各行业丰富详实的市场研究资料和商业情报。为国内外的行业企业、研究机构、社会团体和政府部门提供专业的行业
市场研究、商业分析、投资咨询、市场战略咨询等服务</p>
                    <p>中联智睿已经为数万家包括政府机构、银行、研究所、行业协会、咨询公司、集团公司和各类投资公司在内的单位提供了专业的投资咨询、信息咨询及研究报告
服务，并得到客户的广泛认可。</p>`
            }
        };
    }
};
</script>

<style lang="scss">
.news-detail {
    .container {
        background: #edecf1;
        width: 100%;
        padding-bottom: 24px;
        &-box {
            width: 1200px;
            margin: auto;
            padding-top: 24px;
            .current-location {
                margin-bottom: 24px;
                display: inline-flex;
                .location-title, .el-breadcrumb {
                    font-size: 16px;
                    color: #666666;
                }
                .el-breadcrumb {
                    width: 160px;
                    &__inner, i {
                        font-size: 16px;
                        color: #666666;
                    }
                }
            }
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
                    h5 {
                        font-size: 14px;
                        letter-spacing: .8px;
                        color: #666666;
                        margin: 19px auto 60px;
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
                .related-link {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    // padding: 0 26px;
                    width: 1148px;
                    height: 75px;
                    border-top: 1px solid #efeff3;
                    font-size: 14px;
                    margin: auto;
                    a {
                        color: #000000;
                        text-decoration: none;
                        &:hover {
                            color: #0079b7;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
}
</style>
