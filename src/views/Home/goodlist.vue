<template>
    <div class="goodlist">
    <good-list-item  v-for="item in goodslist"  :goodslistItem="item"></good-list-item>
</div>
</template>

<script>
    import goodListItem from "./goodListItem";
    export default {
        name: "goodlist",
        props: {
            goodslist: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components:{
            goodListItem
        }
    }
</script>

<style scoped>
.goodlist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 50px;
}

</style>
