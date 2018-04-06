<template>
   <div class="jmzc">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>招商加盟</el-breadcrumb-item>
                <el-breadcrumb-item>加盟政策</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <img src="../../../assets/img/jmzc_1.png">
        </div>
   </div>
</template>

<script>

export default {
    name: 'jmzc',
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
.jmzc {
    .listview {
        padding: 94px 80px 0;
        text-align: center;
        img {
            width: 1044px;
            height: 1451px;
            margin-bottom: 84px;
        }
    }
}
</style>
