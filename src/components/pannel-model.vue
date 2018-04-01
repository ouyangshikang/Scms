<template>
    <div class="pannel-model">
        <div class="pannel-model-list" v-for="pannel in pannelList" :key="pannel.title">
            <div class="pannel-model-list__header">
                <span class="left-side"></span>
                <img :src="pannel.iconUrl">
                <span class="pannel-title">{{pannel.title}}</span>
                <span class="right-side"></span>
            </div>
            <pannel :pannelList="pannel.subPannel"></pannel>
        </div>
    </div>
</template>

<script>
import Pannel from './pannel';

export default {
    data() {
        return {

        };
    },
    props: {
        pannelList: {
            type: Array
        }
    },
    components: {
        Pannel
    }
};
</script>

<style lang="scss" scoped>
.pannel-model {
    width: 1200px;
    margin:  0 auto;
    &-list {
        margin-top: 40px;
        &__header {
            display: flex;
            height: 30px;
            justify-content: center;
            align-items: center;
            .left-side,.right-side {
                width: 81px;
                background: #d2d2d6;
                height: 2px;
            }
            span {
                margin-left:16px;
            }
            .left-side {
                margin-right: 16px;
            }
            .pannel-title {
                font-size: 20px;
                color: #084a75;
                letter-spacing: 1.2px;
            }
        }
    }
}
</style>
