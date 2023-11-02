<template>
  <div class="common-layout" v-if="list">
    <el-container>
      <el-header class="top">
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
           
            <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="/home/homePage"
              text-color="#fff"
              :router="true"
            >
              <el-menu-item :index="item.path" v-for="(item,i) in list  " :key="item.path">
              
                <span>
                  {{ item.meta.title }}
                </span>
              </el-menu-item>      
            

            </el-menu>
          </el-col>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";import {useRouter}from 'vue-router'
const router=useRouter()
const list=router.getRoutes().filter(v=>v.meta.isShow)
console.log(list);
</script>

<style lang="less" scoped>
.top {
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
.el-container{
  height:calc(100vh - 80px);
  margin-top: 10px;
  .el-aside{
  height: 100%;
  background-color: red;
 
  .el-col-12{
    width: 100%;
    max-width: 100%;
    height: 100%;


  }
}
}

</style>
