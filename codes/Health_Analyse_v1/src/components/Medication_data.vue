<template>
    <div class="card-container" style="margin: 0px;  padding: 0px;">
        <el-card class="box-card card-large" style="width: 30%; height: 33%;">
          <template #header>
            <div class="card-header">
              <span>卡片名称</span>
              <el-button class="button" text>操作按钮</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表项 ' + o }}
          </div>
        </el-card>
  
        <el-card class="box-card card-large" style="width: 30%; height: 33%;">
          <template #header>
            <div class="card-header">
              <span>卡片名称</span>
              <el-button class="button" text>操作按钮</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表项 ' + o }}
          </div>
        </el-card>
  
        <el-card class="box-card card-large" style="width: 30%; height: 33%;">
          <template #header>
            <div class="card-header">
              <span>卡片名称</span>
              <el-button class="button" text>操作按钮</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表项 ' + o }}
          </div>
        </el-card>
  
        <el-card class="box-card card-large" style="width: 30%; height: 33%;">
          <template #header>
            <div class="card-header">
              <span>卡片名称</span>
              <el-button class="button" text>操作按钮</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表项 ' + o }}
          </div>
        </el-card>
    </div>
  </template>
  
  <script>
  // 添加任何必要的JavaScript
  </script>