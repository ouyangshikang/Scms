<template>
    <div class="lxwm">
        <div class="current-location">
            <span class="location-title">当前位置 :</span>&nbsp;
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>要闻快递</el-breadcrumb-item>
                <el-breadcrumb-item>联系我们</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner"></div>
        <div class="listview">
            <img src="../../../assets/img/lxwm_1.png">
            <div class="contact">
                <div class="contact-us">
                    <span class="contact-us__en">CONTACT US</span>
                    <span class="contact-us__zh">联系我们</span>
                </div>
                <div class="contact-address">
                    <span class="tel">
                        <img src="../../../assets/img/lxwm_2.png" />
                        400-845-7775
                    </span>
                    <span>E-mail：info@zhonglianzhirui.com</span>
                    <span>地址：北京市朝阳区呼家楼街道光华路9号SOHO²</span>
                </div>
            </div>
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
.lxwm {
    .banner {
        width: 1200px;
        height: 380px;
        background: url('../../../assets/img/banner_lxwm.png') no-repeat;
        background-size: cover;
    }
    .listview {
        padding: 87px 80px 84px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 416px;
            height: 434px;
            cursor: pointer;
        }
        .contact {
            width: 380px;
            height: 324px;
            padding: 55px 0;
            margin-left: 85px;
            &-us {
                border-bottom: 1px solid #e1e1e6;
                text-align: left;
                padding-bottom: 40px;
                &__en {
                    display: block;
                    color: rgba(0, 0, 0, 0.16);
                    font-size: 45px;
                }
                &__zh {
                    color: #666666;
                    font-size: 27px;
                    margin-top: 15px;
                    display: block;
                }
            }
            &-address {
                margin-top: 50px;
                text-align: left;
                span {
                    display: block;
                    color: #666666;
                    font-size: 16px;
                    letter-spacing: 1px;
                    line-height: 55px;
                }
                .tel {
                    img {
                        width: 31px;
                        height: 36px;
                        margin-right: 20px;
                    }
                    color: #0079b7;
                    font-size: 31px;
                    display: inline-flex;
                    align-items: center;
                }
            }
        }
    }
}
</style>
