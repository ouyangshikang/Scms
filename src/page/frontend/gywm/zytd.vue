<template>
   <div class="zytd">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>关于我们</el-breadcrumb-item>
                <el-breadcrumb-item>专业团队</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <img src="../../../assets/img/zytd_1.png">
            <div class="seperator"></div>
            <img src="../../../assets/img/zytd_2.png">
        </div>
   </div>
</template>

<script>

export default {
    name: 'zytd',
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
.zytd {
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
            cursor: pointer;
        }
        .seperator {
            width: 1076px;
            height: 1px;
            background: #efeff3;
            margin-bottom: 84px;
        }
    }
}
</style>
