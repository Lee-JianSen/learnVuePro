<template>
    <div
            v-if="change"
            class="btn"
            :class="{'active':change}"
            @click="toggleChange"
    >
        <img src="../../assets/tick.png" alt="">
    </div>
    <div v-else class="btn" @click="toggleChange">

    </div>
</template>

<script>
    export default {
        name: "cartButton",
        props: {
            change: {
                type: Boolean,
                default() {
                    return true
                }
            },
            // allChange:{
            //     type: Boolean,
            //     default() {
            //         return true;
            //     }
            // }
        },
        methods: {
            toggleChange() {
                this.$emit('toggle')
            }
        }
    }
</script>

<style scoped>
    .btn {
        width: 18px;
        height: 18px;
        border-radius: 9px;
        border: 1px solid rgba(100, 100, 100, 0.1);
    }

    .active {
        background-color: deeppink;
    }

    .all-active {
        background-color: deeppink;
    }

    .btn > img {
        width: 15px;
        height: 15px;
    }
</style>
