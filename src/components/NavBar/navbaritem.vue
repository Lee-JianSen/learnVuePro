<template>
    <div class="navbar-item">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "navbaritem"
    }
</script>

<style scoped>
    .navbar-item {
        display: flex;
    }

    .left {
        flex: 1;
    }

    .center {
        display: flex;
        flex: 3;
        justify-content: space-between;
    }

    .right {
        flex: 1;
        text-align: right;
    }
</style>
