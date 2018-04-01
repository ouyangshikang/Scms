<template>
    <div class="pannel">
        <div class="pannel-list" v-for="item in pannelList" :key="item.title">
            <div class="pannel-header">
                <span>{{item.subTitle}}</span>
                <a href="#" v-if="item.isCase">更多</a>
            </div>
            <div class="pannel-content">
                <img :src="item.url" v-if="!item.styleImage">
                <el-carousel trigger="click" height="338px" arrow="always" v-else>
                    <el-carousel-item v-for="img in item.styleImage" :key="img.url">
                        <img :src="img.url">
                    </el-carousel-item>
                </el-carousel>
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
    props: {
        pannelList: {
            type: Array
        }
    }
};
</script>

<style lang="scss" scoped>
.pannel {
    width: 1200px;
    margin-top: 8px;
    &-list {
        width: 592px;
        height: 460px;
        margin-top: 16px;
        display: inline-block;
        background: #ffffff;
        .pannel-header {
            height: 59px;
            border-bottom: 1px solid #efeff3;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                font-size: 16px;
                color: #084a75;
                margin-left: 20px;
            }
            a {
                font-size: 13px;
                color: #0079b7;
                text-decoration: none;
                margin-right: 22px;
            }
        }
        .pannel-content {
            cursor: pointer;
            padding: 0 17px;
            .el-carousel {
                img {
                    width: 558px;
                    height: 338px;
                }
            }
        }
    }
    &-list:nth-child(2n) {
        margin-left: 16px;
    }

}
</style>
