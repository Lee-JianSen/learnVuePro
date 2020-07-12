<template>
<div>
    <div class="content-item">
        <van-grid :column-num="1">
            <van-grid-item>
                <goodlist :goodslist="tabContentDetail"/>
            </van-grid-item>
        </van-grid>
    </div>
</div>
</template>

<script>
    import Vue from 'vue'
    import {Grid, GridItem} from 'vant';
    import goodlist from "../Home/goodlist";

    Vue.use(Grid);
    Vue.use(GridItem);

    export default {
        name: "TabContentDetail",
        props: {
            tabContentDetail: {
                type: Array,
                default() {
                    return [];
                }
            },
        },
        components:{
            goodlist
        }
    }
</script>

<style scoped>

</style>
