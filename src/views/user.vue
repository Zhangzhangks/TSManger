<template>
  <div class="search-box" style="width: 420px;" v-if="data">
    <el-form :model="data.select" label-width="120px">
      <el-form-item label="标题">
        <el-input v-model="data.select.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="data.select.role" class="m-2" placeholder="请选择" size="small">
          <el-option v-for="item in data.roleList" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
  <el-button type="primary" @click="submit">查询</el-button>

  <el-table :data="data.list" border style="width: 67%">
    <el-table-column type="index" label="索引" width="180" />
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column label="角色" width="180">
      <template #default="{ row }">
        <div v-for="item in row.role" :key="item.roleid">{{ item.rolename }}</div>
      </template>

    </el-table-column>
    <el-table-column prop="age" label="年龄" width="120" />

    <el-table-column>
      <template #default="{ row }">
        <el-button type="primary" @click="edit(row)">编辑</el-button>
      </template>

    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
import { getUser, getrole } from '../Api/user'
import { InitData, Iuser } from '../type/user'


const data = reactive(new InitData())
onMounted(() => {
  getUserList();
  getroleList()

})
async function getUserList() {
  const res: any = await getUser();
  data.list = res.userList
}
async function getroleList() {
  const res: any = await getrole();
  console.log(res);
  data.roleList = res.roleList
}

watch([() => data.select.role, () => data.select.name], ([newval, inval]) => {
  if (newval === 0 || inval === '') {
    getUserList();
    getroleList()
  }
}, { deep: true });


const edit = function (row: Iuser) {
  alert('没有做' + row.id)

}
const submit = function () {
  let arr: Iuser[] = [];
  if (data.select.role || data.select.name) {
    if (data.select.role) {
      arr = (data.select.name ? arr : data.list).filter(item => {
        return item.role.find(item => item.roleid == data.select.role)
      })
    }

    if (data.select.name) {
      arr = data.list.filter(item => {
        return item.name.includes(data.select.name)
      })
    }
  }
  data.list = arr;
}

</script>

<style lang="less" scoped></style>