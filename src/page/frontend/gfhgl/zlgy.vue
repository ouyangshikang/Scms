<template>
   <div class="tgxt">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>规范化管理</el-breadcrumb-item>
                <el-breadcrumb-item>自律公约</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="listview">
            <img src="../../../assets/img/zlgy.png">
        </div>
   </div>
</template>

<script>

export default {
    name: 'tgxt',
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
.tgxt {
    .listview {
        margin-top: 0;
        padding: 94px 80px 0;
        text-align: center;
        img {
            margin-bottom: 84px;
        }
    }
}
</style>
