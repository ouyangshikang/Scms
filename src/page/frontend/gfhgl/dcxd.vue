<template>
   <div class="dcxd">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>规范化管理</el-breadcrumb-item>
                <el-breadcrumb-item>督查行动</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <ul>
                <li>
                    <img src="../../../assets/img/dcxd_1.png">
                    <span>活动巡办</span>
                </li>
                <li>
                    <img src="../../../assets/img/dcxd_2.png">
                    <span>自律巡查</span>
                </li>
                <li>
                    <img src="../../../assets/img/dcxd_3.png">
                    <span>指导调研</span>
                </li>
                <li>
                    <img src="../../../assets/img/dcxd_4.png">
                    <span>上门走访</span>
                </li>
            </ul>
        </div>
   </div>
</template>

<script>

export default {
    name: 'dcxd',
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
.dcxd {
    .banner {
        width: 1200px;
        height: 380px;
        background: url('../../../assets/img/banner-zsjm.png') no-repeat;
        background-size: cover;
    }
    .listview {
        margin-top: 24px;
        padding: 94px 80px 45px;
        text-align: center;
        ul {
            li {
                display: inline-block;
                width: 480px;
                height: 370px;
                margin-left: 15px;
                img {
                    cursor: pointer;
                }
                span {
                    font-size: 16px;
                    color: #666666;
                    line-height: 70px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
