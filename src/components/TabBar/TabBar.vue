<template>
    <div>
        <div id="tab-bar">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import TabBarItem from "./TabBarItem";
    export default {
        name: "TabBar",
        components:{
            TabBarItem
        }
    }
</script>

<style scoped>
    #tab-bar {
        display: flex;
        background-color: #f6f6f6;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
        z-index: 999;
    }
</style>
