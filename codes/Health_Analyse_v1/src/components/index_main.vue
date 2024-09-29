<template>
    <div class="main-container">
        <el-container style="height: 100vh; margin: 0;"> <!-- 去掉外边距 -->
            <el-aside width="70%" style="padding: 0;"> <!-- 去掉内边距 -->
                <div class="card-container-left">
                    <!-- 左侧卡片内容 -->
                    <el-card class="box-card card-large" style="text-align:center">
                        <template #header>
                            <div class="card-header">
                                <span>Number of Users</span>
                            </div>
                        </template>
                        <div style="display: flex; align-items: center; justify-content: center; height: 100px;">
                            <el-text class="mx-1" style="font-size: 36px;" type="primary">105</el-text>
                        </div>
                    </el-card>

                    <el-card class="box-card card-large">
                        <template #header>
                            <div class="card-header">
                                <span>Sample Size</span>
                            </div>
                        </template>
                        <div style="display: flex; align-items: center; justify-content: center; height: 100px;">
                            <el-text class="mx-1" style="font-size: 36px;" type="warning">10550</el-text>
                        </div>
                    </el-card>

                    <el-card class="box-card card-large">
                        <template #header>
                            <div class="card-header">
                                <span>User Trend</span>
                            </div>
                        </template>
                        <p>age:</p>
                        <p>height:</p>
                        <p>weight:</p>
                    </el-card>

                    <el-card class="box-card card-large">
                        <template #header>
                            <div class="card-header">
                                <span>Data Trend</span>
                            </div>
                        </template>
                        <p>age:</p>
                        <p>height:</p>
                        <p>weight:</p>
                    </el-card>
                </div>
            </el-aside>

            <el-main style="overflow: hidden; padding: 0; height: 100%;"> <!-- 设置高度为100% -->
                <div class="card-container-right" style="flex: 1; display: flex; align-items: flex-start; height: 100%;">
                    <el-card class="box-card card-large" style="width: 100%; height: 100%;"> <!-- 设置高度为100% -->
                        <template #header>
                            <div class="card-header">
                                <span>Announcement</span>
                            </div>
                        </template>
                        <ul>
                            <li v-for="i in 30">announcements</li>
                        </ul>
                        <template #footer>
                            <el-input
                                v-model="textarea"
                                style="width: 90%"
                                :rows="2"
                                type="textarea"
                                placeholder="Please input"
                            />
                        </template>
                    </el-card>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.main-container {
    background-color: #e0f7fa; /* 设置主容器背景颜色 */
    padding: 0; /* 去除内边距 */
    height: 100vh; /* 使用视口高度 */
}

.el-container {
    height: 100%; /* 确保容器高占满可用高度 */
    display: flex; /* 使用 Flexbox 布局 */
}

.card-container-left {
    display: flex; /* 使用 Flexbox 布局 */
    flex-wrap: wrap; /* 允许换行 */
    justify-content: space-between; /* 每行两张卡片时，间隔相等 */
    padding: 10px; /* 给卡片容器添加内边距 */
}

.card-container-right {
    padding: 10px; /* 右侧卡片容器内边距 */
    width: 100%; /* 确保宽度填满 */
    height: 100%; /* 设置为100%以匹配父容器高度 */
}

.card-large {
    width: calc(50% - 20px); /* 左侧每行两张卡片，减去间隔的宽度 */
    margin-bottom: 10px; /* 底部间隔 */
}

/* 确保右侧卡片适应其容器 */
.card-container-right .box-card {
    width: 100%; /* 右侧卡片宽度为100% */
    height: 100%; /* 设置高度为100% */
}
</style>
<script lang="ts" setup>
    import { ref } from 'vue'
    const textarea = ref('')
</script>