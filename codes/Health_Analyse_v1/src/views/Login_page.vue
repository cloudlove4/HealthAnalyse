<script setup>
import login from '../components/login.vue';
</script>

<template>
    <div class="common-layout">
        <el-container class="container-center">
            <login/>
        </el-container>
    </div>
</template>

<style> 
    *{
        box-sizing: border-box; /* 确保所有元素使用 border-box 模型 */ 
    } 
    body {
        margin: 0; /* 去掉默认的外边距 */
        padding: 0; /* 去掉默认的内边距 */ 
    } 
    .common-layout {
        height: 100vh; /* 设置为视口高度 */
        width: 100vw; /* 设置为视口宽度 */ 
    } 
    .container-center{
        display: flex; flex-direction: column; align-items: center; 
        justify-content: center; height: 100%; /* 让容器占满全高 */ 
    } 
</style>