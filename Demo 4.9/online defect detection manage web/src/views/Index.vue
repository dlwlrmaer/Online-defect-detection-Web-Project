<template>
    <div class="index">
      <div class="left">
        <h2>云边协同缺陷检测平台</h2>
      <el-menu
        router
        active-text-color="#ffd04b"
        background-color="#142334"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
      >
        <el-menu-item index="/home">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>业务管理</span>
          </template>
          <el-menu-item index="/device">边缘设备</el-menu-item>
          <el-menu-item index="/database">数据集管理</el-menu-item>
          <el-menu-item index="/detect">检测任务管理</el-menu-item>
          <el-menu-item index="/model">模型管理</el-menu-item>
          <el-menu-item index="/image">缺陷图片管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="/user">用户管理</el-menu-item>
          <el-menu-item index="/character">角色管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
      </div>
      <div class="right">
        <div class="top">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
          </el-menu>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import {
  House,
  Document,
  Setting
} from '@element-plus/icons-vue'
</script>

<style scoped>
.index{
  width: 100vw;
  height: 100vh;
  display: flex;
  .left{
    width: 200px;
    background-color: #142334;
    color: white;
    .el-menu{
      border-right: none;
    }
    h2{
      font-size: 18px;
      text-align: center;
      height: 60px;
      line-height: 60px;
    }
  }
  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
    .top{
      height: 60px;
      background-color: #142334;
    }
    .content{
      flex:1;
    }
  }
}
</style>