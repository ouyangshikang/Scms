<template>
   <div class="jmlc">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>招商加盟</el-breadcrumb-item>
                <el-breadcrumb-item>招商流程</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <img src="../../../assets/img/zsjm_1.png">
            <img src="../../../assets/img/zsjm_2.png">
            <img src="../../../assets/img/zsjm_3.png">
            <img src="../../../assets/img/zsjm_4.png">
            <img src="../../../assets/img/zsjm_5.png">
            <img src="../../../assets/img/zsjm_6.png">
            <img src="../../../assets/img/zsjm_7.png">
            <img src="../../../assets/img/zsjm_8.png">
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
.jmlc {
    .listview {
        width: 1000px;
        padding: 62px 100px 0;
        text-align: center;
        img {
            width: 481px;
            height: 407px;
            border: 1px solid #cccccc;
            margin-left: 14px;
            margin-bottom: 68px;
        }
    }
}
</style>
