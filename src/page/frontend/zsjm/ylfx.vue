<template>
   <div class="ylfx">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/zsjm/jmlc' }">招商加盟</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/zsjm/ylfx' }">盈利分析</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <img src="../../../assets/img/ylfx_1.png">
        </div>
   </div>
</template>

<script>

export default {
    name: 'jmlc',
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
.ylfx {
    .listview {
        width: 1000px;
        padding: 94px 100px 0;
        text-align: center;
        img {
            width: 1006px;
            height: 1132px;
            margin-bottom: 84px;
        }
    }
}
</style>
