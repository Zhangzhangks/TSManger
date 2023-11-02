<template>
  <div class="login">
    <h2>登陆信息系统</h2>

    <div class="iptForm">
      <el-form ref="ruleFormRef" status-icon label-width="120px" class="demo-ruleForm" :model="form" :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" type="text" autocomplete="off" style="width: 220px" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" autocomplete="off" style="width: 220px" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
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
import { login } from "../Api/login";
import { useRouter } from "vue-router";
const ruleFormRef = ref<FormInstance>();
const router = useRouter()
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
    { min: 3, max: 10, message: "Length should be 3 to 5", trigger: "blur" },
  ],
});

// 登录条件函数
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async(valid: any, fields: any) => {
    if (valid) {
      const { data } = await login(form);
      localStorage.setItem('token', data.token);
      router.push('/home')
    } else {
      console.log("error submit!", fields);
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
// 任何一个表单校验都会触发
// @validate="zks
// const zks = (props: any, isvalid: boolean, message: String) => {
//   // console.log(props, isvalid, message);
// };
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
  display: table;

  h2 {
    margin: 30px 200px 0 0;
  }

  .iptForm {
    margin: 50px auto;
  }
}
</style>
