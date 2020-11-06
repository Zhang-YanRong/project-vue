<template>
<div class="app-wrapper">
    <side-bar class="sidebar-container" />
    <div class="main-container">
        <!-- TODO：顶部用户信息 -->
        <!-- TODO：顶部导航条信息 -->
        <app-main></app-main>
    </div>
</div>
</template>

<script>
import SideBar from "./components/SideBar";
import AppMain from "./components/AppMain";
export default {
    name: "Home",
    components: {
        SideBar,
        AppMain,
    },
};
</script>

<style lang="less" scoped>
.app-wrapper {
    .main-container {
        min-height: 100%;
        transition: margin-left .28s;
        margin-left: 210px;
        position: relative;
    }
}
</style>
