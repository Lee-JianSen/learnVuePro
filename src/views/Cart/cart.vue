<template>
    <div id="cart">
        <div class="TopNav">
            <h2>购物车({{cartList.length}})</h2>
        </div>
        <scroll class="content" ref="scroll">
            <cart-listitem
                    class="cartlistiem"
                    v-if="cartList.length !== 0"
                    v-for="item in cartList"
                    :cart-listdata="item">

            </cart-listitem>
            <div v-else>
                <p>暂时未有商品加入购物车</p>
            </div>
        </scroll>

        <bottom-nav/>
    </div>
</template>

<script>
    import Scroll from "../../components/Scroll";
    import cartListitem from "./cartListitem";
    import bottomNav from "./bottomNav";

    export default {
        name: "cart",
        data() {
            return {
                cartList: [],
            }
        },
        components: {
            Scroll,
            cartListitem,
            bottomNav
        },
        activated() {
            this.cartList = this.$store.state.productList;
            this.$refs.scroll.refresh();
        }
    }
</script>

<style scoped>
    #cart {
        height: 100vh;
    }

    .content {
        /*overflow: hidden;*/
        position: absolute;
        top: 30px;
        bottom: 80px;
        left: 0;
        right: 0;
    }

    .TopNav {
        position: relative;
        height: 37px;
        background-color: deeppink;
        text-align: center;
        z-index: 999;
    }

    h2 {
        padding-top: 7px;
        font-size: 16px;
        color: white;
        margin: 0;
    }
</style>
