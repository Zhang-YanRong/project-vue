<!--
 * @Author: your name
 * @Date: 2020-10-22 17:14:47
 * @LastEditTime: 2020-10-22 17:49:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /project-vue/src/App.vue
-->
<template>
<div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
export default {
    name: "app",
    components: {},
};
</script>

<style>
@import "./assets/css/main.css";

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
