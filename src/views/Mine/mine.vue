<template>
    <div>
        <van-button loading type="primary" />
        <van-button loading type="primary" loading-type="spinner" />
        <van-button loading type="info" loading-text="加载中..." />
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Button, Toast } from 'vant';
    Vue.use(Button);
    Vue.use(Toast);
    export default {
        name: "mine",
        activated() {
            Toast('加载我的页面')
        }
    }
</script>

<style scoped>

</style>
