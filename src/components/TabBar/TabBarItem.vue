<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot name="item-icon"></slot>
       <div :style="activeStyle"><slot  name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            link:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        computed:{
            isActive(){
                // 匹配不到返回-1 !== -1 => true
                // 匹配成功 0 !== -1 => false
                return this.$route.path.indexOf(this.link) !== -1
            },
            activeStyle(){
                return this.isActive ?{color:this.activeColor}:{}
            }
        },
        methods: {
            itemClick() {

                return this.$router.replace(this.link);
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        justify-content: space-between;
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item img {
        height: 24px;
        width: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 3px;
    }
</style>
