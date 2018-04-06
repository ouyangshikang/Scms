<template>
   <div class="tysl">
       <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>体验式加盟</el-breadcrumb-item>
                <el-breadcrumb-item>体验实例</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <ul>
                <li>
                    <span><i>●</i> 体验内容更实际</span>
                    <img src="../../../assets/img/tysl_1.png">
                </li>
                <li>
                    <span><i>●</i>  模式输入更实战</span>
                    <img src="../../../assets/img/tysl_2.png">
                </li>
                <li>
                    <span><i>●</i>  店面运营更适用</span>
                    <img src="../../../assets/img/tysl_3.png">
                </li>
            </ul>
        </div>
   </div>
</template>

<script>

export default {
    name: 'tysl',
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
.tysl {
    .banner {
        width: 1200px;
        height: 380px;
        background: url('../../../assets/img/banner-tysl.png') no-repeat;
        background-size: cover;
    }
    .listview {
        padding: 60px 80px 80px;
        text-align: center;
        ul {
            li {
                display: inline-block;
                height: 370px;
                text-align: left;
                img {
                    cursor: pointer;
                }
                span {
                    font-size: 18px;
                    color: #333333;
                    line-height: 60px;
                    i {
                        font-size: 12px;
                        color: #666666;
                    }
                }
            }
        }
    }
}
</style>
