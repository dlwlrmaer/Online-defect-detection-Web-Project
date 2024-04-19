<template>
    <div class="login">
      <div class="box">
        <h2>缺陷检测在线管理平台</h2>
        <el-form
            size="small"
            ref="formRef"
            :model="formDATA"
            status-icon
            :rules="rules"
            label-width="40px"
          >
            <el-form-item label="账号" prop="loginId">
              <el-input v-model.number="formDATA.loginId" />
            </el-form-item>
            <el-form-item label="密码" prop="loginPwd">
              <el-input v-model="formDATA.loginPwd" type="password" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
              <el-button @click="resetForm(formRef)">取消</el-button>
            </el-form-item>
          </el-form>
      </div>
    </div>
</template>

<script setup lang="ts">
      //导入组合式API
      import { reactive, ref } from 'vue'
      //导入element-plus的类型
      import type { FormInstance, FormRules } from 'element-plus'
      //导入请求api
      import { $Login } from '../api/admin'
      //定义一个ref对象绑定表单
      const formRef = ref<FormInstance>()

      import axios from 'axios';
      //表单数据
      const formDATA = reactive({
        loginId: '',
        loginPwd: ''
      })

      //验证账号
      const validateLoginId = (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('请输入账号'))
        } else {
          callback()
        }
      }
      //验证密码
      const validateLoginPwd = (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }

      //验证对象
      const rules = reactive<FormRules<typeof formDATA>>({
        loginId: [{ validator: validateLoginId, trigger: 'blur' }],
        loginPwd: [{ validator: validateLoginPwd, trigger: 'blur' }],
      })

      //提交表单
      const submitForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.validate((valid) => {
          if (valid) {
            $Login(formDATA)
          } else {
            return false
          }
        })
      }

      //重置表单
      const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.resetFields()
      }
</script>

<style scoped lang="scss">
.login{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom,#142334,#bccfe5);
  display: flex;
  justify-content: center;
  align-items: center;
  .box{
    width: 400px;
    border: 1px solid #fff;
    padding: 20px;
    h2{
      color: white;
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
    ::deep .el-form-item__label{
      color: #fff;
    }
  }
}
</style>