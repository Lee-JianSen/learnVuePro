<template>
    <div class="backicon">
        <img src="../assets/backTop.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "backIcon"
    }
</script>

<style scoped>
    .backicon{
        position: fixed;
        height: 40px;
        width: 40px;
        bottom: 55px;
        right: 10px;
        background: white;
        border-radius: 25px;
        opacity: 0.8;
        z-index: 999;
    }
.backicon img{
    height: 42px;
    width: 42px;
}
</style>
