<template>
<div class="dashboard-wrap">
    <!-- 用户模块 -->
    <el-card class="user-content" shadow="hover">
        <div class="user-info">
            <!-- <img src="../../assets/img/img.jpg" class="user-avator" alt /> -->
            <div class="user-info-cont">
                <div class="user-info-name">小花</div>
                <div>主管理员</div>
            </div>
        </div>
        <div class="user-info-list">
            上次登录时间：
            <span>2019-11-01</span>
        </div>
        <div class="user-info-list">
            上次登录地点：
            <span>浙江省杭州市</span>
        </div>
    </el-card>
</div>
</template>

<style scoped>
.dashboard-wrap {}

.user-content {
    width: 30%;
}
</style>
