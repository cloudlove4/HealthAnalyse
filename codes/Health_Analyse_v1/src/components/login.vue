<template>
  <div class="page-background">
      <div>
          <el-header>
              <el-text style="font-size: medium;color:black;text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif;">Login to Health Analyse System</el-text>
          </el-header>
          <div class="form-container">
              <el-form :model="form" label-width="100px">
                  <el-form-item label="Username" prop="username">
                      <el-input v-model="form.username" placeholder="Please input username"/>
                  </el-form-item>
                  <el-form-item label="Password" prop="password">
                      <el-input v-model="form.password" type="password" placeholder="Please input password" show-password />
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
import { ElMessage } from 'element-plus';

const router = useRouter();

const form = reactive({
  username: '',
  password: '' // 添加 password 字段
});
const errorMessage = ref(''); // 用于存储错误信息

// 假设用户数据
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

const login = () => {
  const user = users.find(u => u.username === form.username && u.password === form.password);

  if (user) {
      errorMessage.value = ''; // 清空错误信息
      router.push('/home/index'); // 登录成功后跳转到主页
  } else {
      errorMessage.value = 'Invalid username or password'; // 设置错误信息
      ElMessage.error(errorMessage.value); // 显示错误消息
  }
};
</script>

<style scoped>
.page-background {
  background-color: #b9cbea;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
