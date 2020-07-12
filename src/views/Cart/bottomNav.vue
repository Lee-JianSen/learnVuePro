<template>
    <div class="bottomNav">
        <div class="button">
            <cart-button :change="isChange" @click.native="checkClick"></cart-button>
        </div>
        <div>全选</div>
        <div class="allPrice">合计{{totalPrice}}</div>
        <div class="settlement">结算({{totalProduct}})</div>
    </div>
</template>

<script>
    import cartButton from "./cartButton";

    export default {
        name: "bottomNav",
        components: {
            cartButton
        },
        computed: {
            totalPrice() {
                return '￥' + this.$store.state.productList.filter(item => {
               // 拿到productList里面change = true的对象保存到新数组
                    return item.change
                }).reduce((oldValue,item) => {
               // item就是上一个新数组里面的数据
               // 总价要用上一次保存的旧商品价格加上新商品的价格
                    return oldValue + item.price * item.counter
                },0).toFixed(2)
            },
            totalProduct(){
                return this.$store.state.productList.filter(item => item.change).length
            },
            isChange(){
                // return   !(this.$store.state.productList.filter(item => !item.change).length)
                if (this.$store.state.productList.length === 0) return false;
                return !this.$store.state.productList.find(item => !item.change)
            }
        },
        methods:{
            checkClick(){
                if (this.isChange){
                    this.$store.state.productList.forEach(item => item.change = false);
                }else {
                    this.$store.state.productList.forEach(item => item.change = true);
                }
            }
        }
    }
</script>

<style scoped>
    .bottomNav {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 30px;
        background-color: #eee;
        position: absolute;
        bottom: 49px;
        z-index: 999;
    }
    .button{

    }
    .allPrice{
        /*margin-left: 15px;*/
    }
    .settlement{
        width: 100px;
        margin-right: -10px;
        text-align: center;
        background-color: deeppink;
        color: white;
    }
</style>
