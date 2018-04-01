<template>
   <div class="news-list">
       <header-nav :isHome="false"></header-nav>
   </div>
</template>

<script>
import HeaderNav from '@/components/header';
export default {
    name: 'news-list',
    components: {
        HeaderNav
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="scss" scoped>
.news-list {

}
</style>
