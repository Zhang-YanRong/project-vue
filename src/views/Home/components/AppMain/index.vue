<template>
<div class="app-main">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</div>
</template>

<style lang="less" scoped>
.app-main {
    /* 50= navbar  50  */
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
}
</style>
