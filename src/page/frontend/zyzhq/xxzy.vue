<template>
   <div class="xxzy">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>资源整合圈</el-breadcrumb-item>
                <el-breadcrumb-item>信息资源</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <ul>
                <li
                    v-for="item in newsListOfCurrPage"
                    :key="item.id"
                    class="list-item"
                >
                    <a @click.stop="openRoute(item)">{{item.title}}</a>
                    <span class="datetime">{{item.date}}</span>
                </li>
            </ul>
            <el-pagination
                layout="prev, pager, next"
                :total="newsList.length"
                :page-size="pageSize"
                :current-page="currentPage"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            >
            </el-pagination>
        </div>
   </div>
</template>

<script>
export default {
    computed: {
        newsListOfCurrPage() {
            return this.newsList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        }
    },
    data() {
        return {
            pageSize: 14,
            currentPage: 1,
            newsList: [{
                title: '关于安心加盟网发布虚假加盟费用的公告说明',
                url: 'news-detail',
                date: '2017-11-15'
            }, {
                title: '第61期加盟商岗前基础培训通知',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '关于加盟商“完胜金秋回炉培训”的开课通知',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '2017年国庆、中秋放假通知公告',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '第60期加盟商岗前基础培训通知',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '合同到期终止合同公告',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '第59期加盟商岗前基础培训通知',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '2017年“五一”劳动节放假通知公告',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '2017年清明节放假通知公告',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '第58期加盟商培训通知',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '关于江西省南昌市高新区加盟店的解约公告',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '第58期加盟商培训通知',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '2017年元旦放假通知公告',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '关于赢在金秋专项培训上门开课的通知',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '关于安心加盟网发布虚假加盟费用的公告说明',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '关于安心加盟网发布虚假加盟费用的公告说明',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '关于安心加盟网发布虚假加盟费用的公告说明',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }, {
                title: '关于安心加盟网发布虚假加盟费用的公告说明',
                url: 'www.baidu.com',
                date: '2017-11-15'
            }]
        };
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        openRoute(item) {
            this.$router.push({
                path: `/news-detail`
            });
        }
    }
};
</script>

<style lang="scss">
.xxzy {
    .banner {
        width: 1200px;
        height: 380px;
        background: url('../../../assets/img/banner.png') no-repeat;
        background-size: cover;
    }
    .listview {
        width: 1080px;
        max-height: 849px;
        background: #ffffff;
        margin-top: 24px;
        padding: 25px 60px;
        .list-item {
            display: flex;
            justify-content: space-between;
            line-height: 50px;
            border-bottom: 1px solid #efeff3;
            a, span {
                font-size: 14px;
                color: #666666;
                letter-spacing: .8px;
            }
            a {
                text-decoration: none;
                cursor: pointer;
                &:hover {
                    color: #0079b7;
                    text-decoration: underline;
                }
            }
        }
        .el-pagination {
            margin-top: 35px;
            text-align: center;
            .el-pager li, i{
                font-size: 16px;
                font-weight: bold;
            }
        }
    }
}
</style>
