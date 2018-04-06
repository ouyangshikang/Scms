<template>
   <div class="news-list">
       <header-nav :isHome="false"></header-nav>
       <div class="container">
           <div class="container-box">
               <router-view />
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

        };
    }
};
</script>

<style lang="scss">
.news-list {
    .container {
        background: #edecf1;
        width: 100%;
        // min-height:1000px;
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

    }
}
</style>
