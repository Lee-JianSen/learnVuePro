<template>
    <div>
        <TabBar>
            <TabBarItem link="/home">
                <div slot="item-text">首页</div>
                <img slot="item-icon" src="../assets/img/tabbar/shouye.png" alt="">
            </TabBarItem>
            <TabBarItem link="/cart">
                <div slot="item-text">分类</div>
                <img slot="item-icon" src="../assets/img/tabbar/fenlei.png" alt="">
            </TabBarItem>
            <TabBarItem link="/category">
                <div slot="item-text">购物车</div>
                <img slot="item-icon" src="../assets/img/tabbar/gouwuche.png" alt="">
            </TabBarItem>
            <TabBarItem link="/mine">
                <div slot="item-text">我的</div>
                <img slot="item-icon" src="../assets/img/tabbar/wode.png" alt="">
            </TabBarItem>
        </TabBar>
    </div>
</template>

<script>
    import TabBar from "../components/TabBar/TabBar";
    import TabBarItem from "../components/TabBar/TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
