<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
            <el-icon><House /></el-icon>
            <span>Index</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>My Data</span>
          </template>
            <el-menu-item index="1-1">Sleep Data</el-menu-item>
            <el-menu-item index="1-2">Daily Step Data</el-menu-item>
            <el-menu-item index="1-3">Physical Activity Data</el-menu-item>
            <el-menu-item index="1-4">Dietary Data</el-menu-item>
            <el-menu-item index="1-5">Medication Data</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><Histogram /></el-icon>
          <span>Data Analyse</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Settings</span>
        </el-menu-item>
      </el-menu>
  </template>
  
  <script setup>

  </script>
  
  <style>
  
  </style>