<template>
   <div class="xxxt">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>标准化输出</el-breadcrumb-item>
                <el-breadcrumb-item>形象系统</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <img src="../../../assets/img/xxxt_2.png">
        </div>
   </div>
</template>

<script>

export default {
    name: 'xxxt',
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
.xxxt {
    .banner {
        width: 1200px;
        height: 380px;
        background: url('../../../assets/img/banner-xxxt.png') no-repeat;
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
