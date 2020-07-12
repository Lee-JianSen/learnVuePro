<template>
    <div class="content-item">
        <van-grid :column-num="3">
            <van-grid-item v-for="(item,index) in TabContent" :key="index">
                <a :href="item.link">
                    <img class="content-img" :src="item.image" alt=""
                    @load="imageLoad"
                    >
                    <p>{{item.title}}</p>
                </a>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Grid, GridItem} from 'vant';

    Vue.use(Grid);
    Vue.use(GridItem);

    export default {
        name: "TabContent",
        props: {
            TabContent: {
                type: Array,

            }
        },
        data() {
            return {};
        },
        methods:{
            imageLoad(){
                this.$emit('imageLoad');
            }
        },
        components: {},
    }
</script>

<style scoped>
    .content-item {
        padding-left: 110px;
    }

    .content-item p {
        text-align: center;
        font-size: 12px;
    }

    .content-img {
        width: 80%;
    }
</style>
