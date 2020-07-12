<template>
    <div>
        <scroll
                id="MenuScroll"
                class="content"
                ref="scroll"
                :probe-type="3"
        >
            <div class="menu_list">
                <div
                        class="menu_list_item"
                        v-for="(item,index) in TabMenu"
                        :class="{'active': index === currentIndex}"
                        @click="menuClick(index)"
                >
                    {{item.title}}
                </div>
            </div>
        </scroll>

    </div>
</template>

<script>
    import Scroll from "../../components/Scroll";

    export default {
        name: "TabMenu",
        props: {
            TabMenu: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data(){
            return{
          currentIndex:0
            }
        },
        components: {
            Scroll
        },
        methods:{
            menuClick(index){
                this.currentIndex = index;
                this.$emit('menuClick',index)
            }
        }
    }
</script>

<style scoped>
    .content {
        overflow: hidden;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 2px;
        z-index: 9;
    }
    #MenuScroll{
        background-color: #f6f6f6;
        height: 100%;
        width: 110px;
        box-sizing: border-box;
    }
    .menu_list_item{
        padding: 5px 0;
        text-align: center;
        font-size: 18px;
        height: 45px;
        line-height: 45px;
    }
    .active{
        background-color: white;
        color: deeppink;
        font-weight: bold;
        font-size: 20px;
    }
</style>
