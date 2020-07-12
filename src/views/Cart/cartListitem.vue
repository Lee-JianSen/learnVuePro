<template>
    <div class="cartBox">
        <div class="button">
            <cart-button :change="cartListdata.change" @toggle="btnToggle"></cart-button>
        </div>
        <div class="cartImg">
            <img :src="cartListdata.image" alt="">
        </div>
        <div class="cartContent">
            {{cartListdata.title}}
            <p>{{cartListdata.desc}}</p>
            <h4>￥{{cartListdata.price}}<span>x{{cartListdata.counter}}</span></h4>
        </div>
    </div>
</template>

<script>
    import cartButton from "./cartButton";

    export default {
        name: "cartListitem",
        props: {
            cartListdata: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        components: {
            cartButton
        },
        methods: {
            btnToggle() {
                this.cartListdata.change = !this.cartListdata.change
            }
        }
    }
</script>

<style scoped>
    .cartBox {
        width: 100%;
        display: flex;
        padding-top: 15px;
        border-bottom: 1px solid rgba(100, 100, 100, 0.2);
    }

    .button {
        width: 6%;
        display: flex;
        align-items: center;
        /*justify-content: center;*/
    }

    .cartImg {
        padding-left: 5px;
        padding-bottom: 5px;
    }

    .cartImg > img {
        width: 80px;
        height: 110px;
        display: block;
        border-radius: 15px;
    }

    .cartContent {
        /*position: relative;*/
        padding: 5px 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex: 3;
    }

    .cartContent > p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        color: gray;
    }

    .cartContent > h4 {
        margin-top: 30px;
        margin-bottom: 0px;
        color: deeppink;
        font-size: 15px;
    }

    .cartContent > h4 > span {
        color: black;
        float: right;
        font-weight: lighter;
    }
</style>
