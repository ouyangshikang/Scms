<template>
   <div class="rmzy">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>资源整合圈</el-breadcrumb-item>
                <el-breadcrumb-item>人脉资源</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <img src="../../../assets/img/rmzy_2.png">
            <div class="content">
                <article v-html="article"></article>
            </div>
        </div>
   </div>
</template>

<script>

export default {
    name: 'rmzy',
    components: {

    },
    data() {
        return {
            article: `
                <p>中联智睿不断吸引着人大代表、政协代表、杰出青年、商界大咖等大批精英圈层加盟，依托加盟商背后的人脉资源，有效打通了遍布全国的
政界、商界、学术界人脉资源，搭建起全国人脉支持体系。</p>
            `
        };
    },
    methods: {

    }
};
</script>

<style lang="scss">
.rmzy {
    .banner {
        width: 1200px;
        height: 380px;
        background: url('../../../assets/img/zytd_banner.png') no-repeat;
        background-size: cover;
    }
    .listview {
        padding: 94px 80px 0;
        text-align: center;
        img {
            margin-bottom: 84px;
        }
        .content {
            width: 903px;
            padding: 60px 82px;
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
