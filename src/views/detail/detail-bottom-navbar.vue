<template>
    <div class="bottomNavBar">
        <div class="customerService">
            <img class="allImg" src="../../assets/img/kefu.png" alt="">
            <p>客服</p>
        </div>
        <div class="shop">
            <img class="allImg" src="../../assets/img/dianpu.png" alt="">
            <p>店铺</p>
        </div>
        <div class="collect">
            <img class="allImg" src="../../assets/shoucang.png" alt="">
            <p>收藏</p>
        </div>
        <div class="shopCart" @click="buyClick">
            <p>加入购物车</p>
        </div>
        <div class="buy">
            <p>购买</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailBottomNavBar",
        methods: {
            buyClick() {
                this.$emit('buyClick')
            }
        }
    }
</script>

<style scoped>
    .bottomNavBar {
        display: flex;
        width: 100%;
        background-color: white;
        box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
        position: fixed;
        z-index: 999;
        bottom: -10px;
        left: 0px;
        right: 0;
    }

    .customerService {
        flex: 1;
        padding-left: 5px;
    }

    .shop {
        flex: 1;
        padding-left: 5px;
    }

    .collect {
        flex: 1;
        padding-left: 5px;
    }

    .shopCart {
        background-color: yellow;
        flex: 2.3;
    }

    .shopCart > p {
        font-size: 17px;
        text-align: center;
        padding-top: 12px;
    }

    .buy {
        background-color: deeppink;
        flex: 1.8;
    }

    .buy > p {
        color: white;
        font-size: 17px;
        text-align: center;
        padding-top: 12px;
    }

    .allImg {
        width: 28px;
        height: 28px;
        vertical-align: middle;
    }

    p {
        margin-top: 0px;
        font-size: 12px;
    }
</style>
