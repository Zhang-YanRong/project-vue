<template>
<div class="sidebar-container">
    <!-- TODO:折叠面板 -->
    <el-scrollbar>
        <el-menu :default-active="activeMenu" :unique-opened="true" background-color="#304156" text-color="#bfcbd9" mode="vertical" active-text-color="#409eff">
            <template v-for="item in menuList">
                <el-submenu :key="item.path" :index="item.path" v-if="!hasOneChild(item.children, item)">
                    <template v-slot:title>
                        <item v-if="item.meta" :title="item.meta.title" :icon="item.meta.icon"></item>
                    </template>
                    <template v-for="ele in item.children">
                        <router-link :key="ele.path" :to="resolvePath(true, ele.path, item.path)" tag="div">
                            <el-menu-item>
                                <span>{{ ele.meta.title }}</span>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-submenu>
                <router-link :key="item.path" :to="item.path" tag="div" v-else-if="!item.notShow">
                    <el-menu-item :index="resolvePath(false, item.children[0].path, '')">
                        <svg-icon :icon-class="item.children[0].meta.icon" />
                        <span>{{ item.children[0].meta.title }}</span>
                    </el-menu-item>
                </router-link>
            </template>
        </el-menu>
    </el-scrollbar>
</div>
</template>

<script>
import path from "path"
import {
    routes
} from "../../../../route/index"
import Item from "./Item"
import SvgIcon from "@/components/SvgIcon"
export default {
    name: "SideBar",
    components: {
        SvgIcon,
        Item,
    },
    data() {
        return {
            menuList: routes,
        }
    },

    mounted() {
        this.menuList = this.menuList.filter((item) => !item.notShow)
    },

    computed: {
        activeMenu() {
            const route = this.$route
            const {
                meta,
                path
            } = route
            return path
        },
    },
    methods: {
        hasOneChild(child = [], item) {
            if (item.onlyChild) {
                // 一个子元素不展示二级菜单

                return true
            }
            return false
        },
        resolvePath(hasBaseRoute, routePath, baseRoute) {
            if (hasBaseRoute) {
                return path.resolve(baseRoute, routePath)
            } else {
                return path.resolve(baseRoute, routePath)
            }
        },
    },
}
</script>

<style lang="less">
.sidebar-container {
    width: 210px;
    background: #304156;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;

    .el-menu {
        border: none;
    }

    .icon {
        margin-right: 16px;
    }
}
</style>
