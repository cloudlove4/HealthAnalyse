<template>
  <el-menu
    default-active="1" 
    class="el-menu-vertical-demo"
>
  <el-menu-item index="1" @click="handleClick('1')">
      <el-icon><House /></el-icon>
      <span>Index</span>
  </el-menu-item>
  <el-sub-menu index="2">
    <template #title>
      <el-icon><Document /></el-icon>
      <span>My Data</span>
    </template>
      <el-menu-item index="2-1" @click="handleClick('2-1')">Sleep Data</el-menu-item>
      <el-menu-item index="2-2" @click="handleClick('2-2')">Daily Step Data</el-menu-item>
      <el-menu-item index="2-3" @click="handleClick('2-3')">Physical Activity Data</el-menu-item>
      <el-menu-item index="2-4" @click="handleClick('2-4')">Dietary Data</el-menu-item>
      <el-menu-item index="2-5" @click="handleClick('2-5')">Medication Data</el-menu-item>
  </el-sub-menu>
  <el-menu-item index="3" @click="handleClick('3')">
    <el-icon><Histogram /></el-icon>
    <span>Data Analyse</span>
  </el-menu-item>
  <el-menu-item index="4" @click="handleClick('4')">
    <el-icon><Document /></el-icon>
    <span>Data Upload</span>
  </el-menu-item>
  <el-menu-item index="5" @click="handleClick('5')">
    <el-icon><Setting /></el-icon>
    <span>Settings</span>
  </el-menu-item>
</el-menu>
</template>

<script setup>
import { defineEmits } from 'vue';
import { useRouter } from 'vue-router'; // 导入 useRouter
import { House, Document, Histogram, Setting } from '@element-plus/icons-vue'; // 导入图标

const emit = defineEmits();
const router = useRouter(); // 创建 router 实例

function handleClick(menuItemIndex) {
  const componentMap = {
    '1': '/home/index',
    '2-1': '/home/sleep_data',
    '2-2': '/home/Step_data', // 更新为正确的路径
    '2-3': '/home/phy_activity',
    '2-4': '/home/dietary_data',
    '2-5': '/home/medication_data',
    '4':'/home/data_upload'
  };

  // 根据菜单项索引导航到相应的路径
  if (componentMap[menuItemIndex]) {
    router.push(componentMap[menuItemIndex]);
  }
}
</script>
