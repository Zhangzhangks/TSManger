<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <img src="../assets/vue.svg" alt="" />
          </el-col>
          <el-col :span="16">
            <h2>登陆管理系统</h2>
          </el-col>
          <el-col :span="4">
            <h2 class="logoout">退出登录</h2>
          </el-col>
        </el-row></el-header
      >
      <el-container>
        <el-aside width="200px">
          <el-col :span="12">
            <h5 class="mb-2">Custom colors</h5>
            <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
            >
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
</script>

<style lang="less" scoped>
.common-layout {
  height: 80px;
  background-color: #666;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h2,
  .logoout {
    line-height: 80px;
    text-align: center;
    color: #fff;
  }
}
</style>
