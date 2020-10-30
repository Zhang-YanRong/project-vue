<template>
<!-- TODO:首页左侧高亮 -->
<div class="sidebar">
    <el-container style="height:100%">
        <el-header class="sidebar-head-container" height="70">
            <!-- TODO： 折叠按钮-->
            <div class="logo">后台管理系统</div>
            <!--
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
            -->
        </el-header>
        <el-container class="sidebar-body-container" style="height :100px">
            <el-aside width="200px" class="sidebar-body-aside">
                <el-menu router unique-opened background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff">
                    <template v-for="item in menuList">
                        <el-menu-item :index="item.index" :key="item.title" class="sidebar-li">
                            <span class="iconfont" v-html="item.icon"></span>
                            <span>{{ item.title }}</span>
                        </el-menu-item>
                    </template>
                    <!--<el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                   -->
                </el-menu>
            </el-aside>

            <el-main class="sidebar-main">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
                <!--  <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址"> </el-table-column>
                </el-table>
              -->
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import {
    menuList
} from "./const/menu.js";
export default {
    // 组件里的data为什么是函数
    data() {
        return {
            menuList: menuList,
        };
    },
};
</script>

<style lang="less" scoped>
.sidebar {
    display: block;
    height: 100%;

    .sidebar-li {
        text-align: left;

        .iconfont {
            margin-right: 10px;
        }
    }
}

.sidebar-head-container {
    position: fixed;
    top: 0;
    width: 100%;
    font-size: 22px;
    height: 70px;
    color: #fff;
    background-color: #242f42;
    display: flex;
    align-items: center;
    z-index: 2;
}

.sidebar-body-container {
    margin-top: 70px;

    background-color: rgb(50, 65, 87);

    .sidebar-body-aside {
        .el-menu {
            border: none
        }
    }
}

.sidebar-main {
    height: 100%;
    background: #f0f0f0;
}
</style>
