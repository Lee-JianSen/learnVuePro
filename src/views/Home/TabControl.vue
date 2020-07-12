<template>
    <div class="tab-control">
        <div class="tab-control-item"
             v-for="(item,index) in title"
             :class="{active:currentIndex === index}"
             @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props: {
            title: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex = index;
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        padding: 10px 0 10px;
        background: white;
        z-index: 9;
    }

    .tab-control-item {
        flex: 1;
    }

    .active{
        color: deeppink;
    }
    .active span{
        padding: 5px;
        border-bottom: 2px solid deeppink;
        border-radius: 2px;
    }
</style>
