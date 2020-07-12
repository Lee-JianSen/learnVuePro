<template>
    <div class="navbar">
        <navbaritem>
            <div slot="left" @click="backBtn">
                <img src="../../assets/back.png" alt="">
            </div>
            <div
                    slot="center"
                    v-for="(item,index) in title"
                    @click="itemClick(index)"
                    :class="{active:currentIndex===index}"
            >{{item}}
            </div>
            <!--            <div slot="right">99</div>-->
        </navbaritem>

    </div>
</template>

<script>

    import navbaritem from "./navbaritem";

    export default {
        name: "navbar",
        data() {
            return {
                title: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0,

            }
        },
        components: {
            navbaritem,
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
                this.$emit('navBarClick',index);
            },
            backBtn(){
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped>
    .navbar {
        padding: 7px 15px;
        background: white;
        box-shadow: 0 2px 1px #f6f6f6;
        position: relative;
        z-index: 999;
    }

    .navbar img {
        padding-top: 3px;
        width: 20px;
        height: 20px;
    }
    .active{
        color: deeppink;
    }
</style>
