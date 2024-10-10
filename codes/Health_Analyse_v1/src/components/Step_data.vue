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

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin: 0;
}

.card-large {
  min-height: 300px; /* 设置最小高度 */
  margin-bottom: 20px; /* 调整底部间隔 */
  margin-right: 10px; /* 右侧间隔 */
}
.card-large:nth-child(3n) {
  margin-right: 0;
}

* {
  box-sizing: border-box;
}
</style>