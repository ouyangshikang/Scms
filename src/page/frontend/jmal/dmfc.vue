<template>
    <div class="dmfc">
        <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>加盟案例</el-breadcrumb-item>
                <el-breadcrumb-item>店面风采</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <ul>
                <li>
                    <img src="../../../assets/img/dmfc_1.png">
                    <span></span>
                </li>
                <li>
                    <img src="../../../assets/img/dmfc_2.png">
                    <span></span>
                </li>
                <li>
                    <img src="../../../assets/img/dmfc_3.png">
                    <span></span>
                </li>
                <li>
                    <img src="../../../assets/img/dmfc_4.png">
                    <span></span>
                </li>
                <li>
                    <img src="../../../assets/img/dmfc_5.png">
                    <span></span>
                </li>
                <li>
                    <img src="../../../assets/img/dmfc_6.png">
                    <span></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dmfc',
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>

<style lang="scss">
.dmfc {
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
