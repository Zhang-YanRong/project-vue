<template>
<div class="login-wrap">

    <div class="login-card">
        <div class="title">后台管理系统</div>
        <el-form :model="param" :rules="rules" ref='login'>
            <el-form-item label="用户名" prop='username'>
                <el-input v-model="param.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model='param.password' type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            param: {
                username: "",
                password: ""
            },
            rules: {
                username: [{
                    required: true,
                    message: '请输入用户名',
                    // trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请输入密码',
                    // trigger: 'blur' 
                }],
            },
        }
    },
    mounted() {

    },
    methods: {
        login() {
            this.$refs.login.validate((valid) => {
                // console.log(valid)
                if (valid) {
                    // 登录成功
                    this.$router.push("/")
                }
            })
        },
        reset() {
            this.$refs.login.resetFields()
        }
    }
};
</script>

<style scoped>
.login-wrap {
    width: 100%;
    height: 100%;
    background: url('../../assets/img/20756708ba04d35d9a8093b2e7a43c94.jpg') center;
}

.login-card {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    padding: 30px 30px;
    color: #fff;

}
</style>
