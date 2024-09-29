<script setup>
  import all_nav from '../components/all_nav.vue'
  import top from '../components/top.vue'
  import index_main from '../components/index_main.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header><top/></el-header>
      <el-container>  
        <el-aside width="200px"><all_nav/></el-aside>
        <el-main><index_main/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
  .common-layout{
    height:100vh
  }
  .el-container{
    height:100%;
  }
  .el-main{
    background-color: #e0f7fa;
  }
</style>