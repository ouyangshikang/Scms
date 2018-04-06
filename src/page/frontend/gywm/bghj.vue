<template>
   <div class="bghj">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>关于我们</el-breadcrumb-item>
                <el-breadcrumb-item>办公环境</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <ul>
                <li>
                    <img src="../../../assets/img/bghj_1.png">
                    <span>形象展示墙</span>
                </li>
                <li>
                    <img src="../../../assets/img/bghj_2.png">
                    <span>前台形象墙</span>
                </li>
                <li>
                    <img src="../../../assets/img/bghj_3.png">
                    <span>接待室</span>
                </li>
                <li>
                    <img src="../../../assets/img/bghj_4.png">
                    <span>培训室</span>
                </li>
                <li>
                    <img src="../../../assets/img/bghj_5.png">
                    <span>授权室</span>
                </li>
                <li>
                    <img src="../../../assets/img/bghj_6.png">
                    <span>企划宣传室</span>
                </li>
                <li>
                    <img src="../../../assets/img/bghj_7.png">
                    <span>连锁运维室</span>
                </li>
                <li>
                    <img src="../../../assets/img/bghj_8.png">
                    <span>客户洽谈室</span>
                </li>
            </ul>
        </div>
   </div>
</template>

<script>

export default {
    name: 'bghj',
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
.bghj {
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
