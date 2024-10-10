<template>
  <div class="common-layout">
    <el-container>
      <el-header><top /></el-header>
      <el-container>
        <el-aside width="200px"><all_nav @change-component="changeComponent" /></el-aside>
        <el-main>
          <!-- 使用 router-view 来渲染子路由 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import all_nav from '../components/all_nav.vue';
import top from '../components/top.vue';
import index_main from '../components/index_main.vue';
import login from '../components/login.vue';

const currentComponent = ref('index_main');

function changeComponent(componentName) {
  currentComponent.value = componentName;
}
</script>

<style scoped>
  .common-layout {
    height: 100vh;
  }
  .el-container {
    height: 100%;
  }
  .el-main {
    background-color: #e0f7fa;
  }
</style>