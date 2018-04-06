<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    watch: {
        '$route': (to, from) => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
};
</script>

<style>
@import 'assets/css/reset.scss';
#app {
  font-family: '微软雅黑';
  color: #000;
}
</style>
