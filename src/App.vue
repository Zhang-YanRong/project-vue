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
}
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

.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
