<template>
    <div class="page-background">
        <div>
        <el-header>
            <el-text style="font-size: medium;color:black;text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif;">Login to Health Analyse System</el-text>
        </el-header>
      <div class="form-container">
        <el-form :model="form" label-width="100px">
          <el-form-item label="Username">
            <el-input v-model="form.username" placeholder="Please input username"/>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="input" type="password" placeholder="Please input password" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">Login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  const input = ref('');
  const form = reactive({
    username: '',
    // 其他字段...
  });
  
  const login = () => {
  // 执行登录逻辑，例如验证用户输入等
  // ...

  // 登录成功后跳转到主页
  router.push('/home/index');
};
  </script>
  
  <style scoped>
  .page-background {
    background-color: #b9cbea; /* 整个页面的背景色 */
    min-height: 100vh; /* 确保页面至少占满视口高度 */
    display: flex;
    align-items: center;
    justify-content: center; /* 垂直和水平居中对齐 */
    width: 100%;
  }
  
  .form-container {
    background-color: white; /* 登录表单部分的背景色 */
    padding: 20px; /* 添加一些内边距 */
    border-radius: 8px; /* 可选：添加圆角 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 可选：添加阴影 */
  }
  </style>