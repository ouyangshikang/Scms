<template>
    <transition name='slide-fade'>
        <div class="back2top" v-show="isShow" @click="back2top">
            <div class="back-btn">
                <i class="iconfont icon-arrow-up"></i>
                <span>顶部</span>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'back-top',
    data() {
        return {
            isShow: false
        };
    },
    watch: {

    },
    methods: {
        back2top() {
            let timer = setInterval(() => {
                let top = document.body.scrollTop || document.documentElement.scrollTop;
                let speed = Math.ceil(top / 5);
                document.body.scrollTop = document.documentElement.scrollTop = top - speed;
                if (top === 0) {
                    clearInterval(timer);
                }
            }, 20);
        },
        showIcon() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; ;
            console.log(scrollTop);
            if (scrollTop >= 300) {
                this.isShow = true;
            } else {
                this.isShow = false;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.showIcon);
    },
    beforeDestroy () {
        //  组件销毁的时候，需要删除scroll的监听事件。
        window.removeEventListener('scroll', this.showIcon);
    }
};
</script>

<style lang="scss" scoped>
.back2top {
    position: fixed;
    top: calc(50vh + 300px);
    left: calc(50vw + 610px);
    background: #ffffff;
    border: 1px solid #efeff3;
    &:hover {
        background: #d8dada;
    }
    .back-btn {
        padding: 18px 12px;
        cursor: pointer;
        i, span {
            display: block;
            text-align: center;
            line-height: 20px;
        }
        i {
            font-size: 20px;
        }
        span {
            font-size: 13px;
            color: #666666;
            user-select: none;
        }
    }
}
.slide-fade-enter-active {
    transition: all .1s ease;
}
.slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.3, 0.8, 1.0);
    opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
}

</style>
