<template>
   <div class="hxys">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>体验式加盟</el-breadcrumb-item>
                <el-breadcrumb-item>核心优势</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <img src="../../../assets/img/hxys.png">
        </div>
   </div>
</template>

<script>

export default {
    name: 'hxys',
    components: {

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
.hxys {
    .banner {
        width: 1200px;
        height: 380px;
        background: url('../../../assets/img/banner.png') no-repeat;
        background-size: cover;
    }
    .listview {
        padding: 94px 80px 0;
        text-align: center;
        img {
            margin-bottom: 84px;
        }
    }
}
</style>
