<template>
    <el-page-header :icon="null">
        <template #title>
            <el-button circle>
                <el-avatar
                    :size="32"
                    class="mr-3"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    />
            </el-button>        
        </template>
        <template #content>
            <div class="flex items-center">
                <span class="text-large font-600 mr-3"> Health Analyse System </span>
                <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
                </span>
            </div>
        </template>
        <template #extra>
            <div class="flex items-center">
                <el-button @click="Logout">Log in</el-button>
                <el-button color="black" @click="Logout">Log out</el-button>
            </div>
        </template>
    </el-page-header>
</template>

<script setup>
     import { useRouter } from 'vue-router';
     const router = useRouter();
     const Logout = () => {
  // 执行登录逻辑，例如验证用户输入等
  // ...

  // 登录成功后跳转到主页
  router.push('/login');
};
</script>

