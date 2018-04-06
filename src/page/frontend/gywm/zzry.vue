<template>
   <div class="zzry">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>关于我们</el-breadcrumb-item>
                <el-breadcrumb-item>资质荣誉</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <ul>
                <li>
                    <img src="../../../assets/img/zzry_1.png">
                    <span>中联智睿调查证件</span>
                </li>
                <li>
                    <img src="../../../assets/img/zzry_2.png">
                    <span>2017中国优秀企业公民</span>
                </li>
                <li>
                    <img src="../../../assets/img/zzry_3.png">
                    <span>涉外调查许可证</span>
                </li>
                <li>
                    <img src="../../../assets/img/zzry_4.png">
                    <span>第四届常务理事单位</span>
                </li>
            </ul>
        </div>
   </div>
</template>

<script>

export default {
    name: 'zzry',
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
.zzry {
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
