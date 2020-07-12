<template>
    <div class="goodlist-item" @click="itemClick">
        <!--        通过@load监听图片是否加载完成-->
        <img v-lazy="showImage" alt="" @load="imageLoad">
        <div class="goodInfo">
            <p>{{goodslistItem.title}}</p>
            <span class="price">{{goodslistItem.price}}</span>
            <span class="collect">{{goodslistItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
    import Scroll from "../../components/Scroll";

    export default {
        name: "goodListItem",
        props: {
            goodslistItem: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        computed: {
            showImage() {
                return this.goodslistItem.img || this.goodslistItem.show.img
            },
            getId() {
                return this.goodslistItem.iid || this.goodslistItem.item_id
            }
        },
        mounted() {
            // console.log(this.goodslistItem);
        },
        methods: {
            imageLoad() {
                // 通过$bus的Vue实例发射imageLoad方法
                // $bus为事件总线
                this.$bus.$emit('itemImageLoad');
            },
            itemClick() {

                this.$router.push({
                    path: '/detail',
                    query: {id: this.getId}
                }),
                    console.log(this.getId);
            }
        },

    }
</script>

<style scoped>
    .goodlist-item {
        position: relative;
        width: 48%;
        z-index: 899;
        padding: 0 0 40px;
    }

    .goodlist-item img {
        width: 100%;
        border-radius: 5px;
    }

    .goodInfo {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goodInfo p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .price, .collect {
        font-size: 12px;
        color: deeppink;
        position: relative;
    }

    .collect {
        margin-left: 30px;
        margin-right: 20px;
    }

    .price:before {
        content: '';
        position: absolute;
        left: 45px;
        top: 1px;
        width: 14px;
        height: 14px;
        background: url("../../assets/shoucang.png") 0 0/14px 14px;

    }

    .goodInfo img {
        height: 15px;
        width: 15px;
    }
</style>
