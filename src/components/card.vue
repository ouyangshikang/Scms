<template>
    <div class="card">
        <div
            class="card-list"
            v-for="card in cardList"
            :key="card.title"
            @click="openRoute(card)"
        >
            <img :src="card.url">
            <div class="card-info">
                <p class="card-title">{{card.title}}</p>
                <p class="card-desc">{{card.desc}}</p>
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
        cardList: {
            type: Array
        }
    },
    methods: {
        openRoute(item) {
            if (!item) {
                this.$router.push({path: '/'});
            } else {
                this.$router.push({
                    path: `${item.route}`
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    .card {
        margin: 16px auto 0;
        width: 1200px;
        display: flex;
        &-list {
            width: 211px;
            height: 44px;
            border-right: 1px solid #e6e6eb;
            padding: 48px 44px;
            background: #ffffff;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all ease .3s;
            &:hover {
                box-shadow: 0 0 20px 0px #409eff;
                transform: translateY(-3px);
            }
            .card-info {
                margin-left: 18px;
                .card-title {
                    font-size: 20px;
                    color: #333333;
                    letter-spacing: 1.2px;
                }
                .card-desc {
                    margin-top: 10px;
                    font-size: 13px;
                    color: #999999;
                    letter-spacing: .8px;
                }
            }
        }
    }
</style>
