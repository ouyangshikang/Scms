<template>
   <div class="zsjm">
       <header-nav :isHome="false"></header-nav>
       <div class="container">
           <div class="container-box">
               <router-view/>
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
    name: 'zsjm',
    components: {
        HeaderNav,
        Footers,
        BackTop
    },
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>

<style lang="scss">
.zsjm {
    .container {
        background: #edecf1;
        width: 100%;
        min-height:1000px;
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
                background: url('../../../assets/img/banner-zsjm.png') no-repeat;
                background-size: cover;
            }
            .listview {
                // width: 1080px;
                // max-height: 849px;
                background: #ffffff;
                margin-top: 24px;
                // padding: 25px 60px;
            }
        }

    }
}
</style>
