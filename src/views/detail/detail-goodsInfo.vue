<template>
    <div v-if="Object.keys(detailGoodsInfo).length !== 0" class="goodsInfo">
        <div class="start">
        </div>
        <div class="context">
            {{detailGoodsInfo.desc}}
        </div>
        <div class="end">
        </div>
        <div class="detailGoodsInfo" v-for="item in detailGoodsInfo.detailImage">
            <p>{{item.key}}</p>
            <div class="goodsInfoImage" v-for="itemimg in item.list">
                <img :src="itemimg" alt="" @load="imageLoad">
            </div>
        </div>
        <div class="separate"></div>

    </div>
</template>

<script>
    export default {
        name: "detailGoodsInfo",
        props: {
            detailGoodsInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                counter: 0,
                imgNumber: 0
            }
        },
        methods:{
            imageLoad() {
                this.counter += 1;
                if (this.counter === this.imgNumber){
                    this.$emit('imageLoad');
                }
            }
        },
        watch:{
            detailGoodsInfo(){
                this.imgNumber = this.detailGoodsInfo.detailImage[0].list.length;
            }
        }
    }
</script>

<style scoped>
    .goodsInfo {
        margin-top: 15px;

    }

    .start {
        position: relative;
        width: 25%;
        height: 1px;
        background-color: black;
        margin-bottom: 10px;
        padding: 0 5px;
    }

    .start:before {
        content: '';
        height: 4px;
        width: 4px;
        background-color: black;
        position: absolute;
        top: -4px;
        left: 0;
    }

    .context {
        font-size: 13px;
        padding: 0 5px;
    }

    .end {
        float: right;
        position: relative;
        width: 25%;
        height: 1px;
        background-color: black;
        margin-top: 5px;
        padding: 0 5px;
    }

    .end:before {
        content: '';
        height: 4px;
        width: 4px;
        background-color: black;
        position: absolute;
        top: -4px;
        right: 0;
    }

    .detailGoodsInfo > p {
        font-size: 14px;
        margin-bottom: 0;
    }

    .goodsInfoImage > img {
        width: 100%;
    }
    .separate{
        margin: 15px 0;
        height: 3px;
        background-color: rgba(140, 140, 140, 0.2);
    }
</style>
