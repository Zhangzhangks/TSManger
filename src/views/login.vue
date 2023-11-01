<template>
  <div class="login">
    <h2>登陆信息系统</h2>
    <div class="iptForm">
      <el-form
        ref="ruleFormRef"
        status-icon
        label-width="120px"
        class="demo-ruleForm"
        :model="form"
        :rules="rules"
      >
        <el-form-item label="姓名" prop="name">
          <el-input
            v-model="form.name"
            type="text"
            autocomplete="off"
            style="width: 220px"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            autocomplete="off"
            style="width: 220px"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >Submit</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div class="bg"></div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { loginObj } from "../type/login";
const ruleFormRef = ref<FormInstance>();
const form = reactive<loginObj>({
  name: "",
  password: "",
});
const rules = reactive<FormRules>({
  name: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
});

// 登录条件函数
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="less" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: url(../assets/bg.jpg) no-repeat center;
  z-index: -99;
}

.login {
  width: 550px;
  height: 300px;
  background-color: #fff;
  border-radius: 20px;
  margin: 100px auto;

  text-align: center;
  h2 {
    margin: 10px 200px 0 0;
  }
  .iptForm {
    margin: 20px auto;
  }
}
</style>
