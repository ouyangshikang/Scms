<template>
    <div class="wdfb">
        <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>加盟案例</el-breadcrumb-item>
                <el-breadcrumb-item>网点分布</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <img src="../../../assets/img/wdfb_1.png">
            <ul>
                <li>
                    <img src="../../../assets/img/wdfb_2.png">
                    <span>接待室</span>
                </li>
                <li>
                    <img src="../../../assets/img/wdfb_3.png">
                    <span>培训室</span>
                </li>
                <li>
                    <img src="../../../assets/img/wdfb_4.png">
                    <span>授权室</span>
                </li>
                <li>
                    <img src="../../../assets/img/wdfb_5.png">
                    <span>企划宣传室</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>

<style lang="scss">
.wdfb {
    .banner {
        width: 1200px;
        height: 380px;
        background: url('../../../assets/img/banner-zsjm.png') no-repeat;
        background-size: cover;
    }
    .listview {
        padding: 94px 80px 55px;
        text-align: center;
        ul {
            margin-top: 80px;
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
