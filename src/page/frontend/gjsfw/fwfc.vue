<template>
   <div class="fwfc">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>管家式服务</el-breadcrumb-item>
                <el-breadcrumb-item>服务风采</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <img src="../../../assets/img/fwfc.png">
        </div>
   </div>
</template>

<script>

export default {
    name: 'fwfc',
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
.fwfc {
    .banner {
        width: 1200px;
        height: 380px;
        background: url('../../../assets/img/banner-tysl.png') no-repeat;
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
