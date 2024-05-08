<template>
    <div class="character">
     <div class="edit">
        <el-button size="small" type="primary" @click="drawer = true">
            <el-icon><Plus /></el-icon>
            <span>新增</span>
        </el-button>
        <el-button color="#529b2e" size="small" type="primary" @click="drawer = true">
            <el-icon><EditPen /></el-icon>
            <span>修改</span>
        </el-button>
        <el-button color="#c45656" size="small" type="primary" @click="drawer = true">
            <el-icon><Delete /></el-icon>
            <span>删除</span>
        </el-button>
     </div class="type">  
     <el-table :data="characterData" style="width: 100%">
        <el-table-column prop="id" label="角色编号" width="180" />
        <el-table-column prop="name" label="角色名称" width="180" />
        <el-table-column prop="authority" label="权限字符" width="180" />
        <el-table-column label="操作">
         <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
           编辑
          </el-button>
          <el-button
           size="small"
           type="danger"
           @click="handleDelete(scope.$index, scope.row)"
          >
           删除
          </el-button>
         </template>
        </el-table-column>
    </el-table>
    <el-drawer
        size="30%"
        v-model="drawer"
        title="添加角色"
        direction="rtl"
        :before-close="closeDrawer"
    >
  </el-drawer>
    </div>
</template>

<script setup lang="ts">
import {
  Plus,
  EditPen,
  Delete
} from '@element-plus/icons-vue'
/* import {onMounted,ref} from 'vue'
import {$list} from '../../api/role.ts'
//角色列表
let roles = ref([])

//加载角色列表
const loadRoles = async() => {
    roles.value = await $list()
}
//删除角色
const delRole = async(id:number) => {
    await $delRole(id)
    loadRoles()
}
//修改角色
const editRole = async(id:number) => {
    await $editRole(id)
    loadRoles()
}
//添加角色
const addRole = async(id:number) => {
    await $addRole(id)
    loadRoles()
}
onMounted(() => {
    loadRoles()
}) */
//import { ref } from 'vue'
//const value1 = ref(true)
import { Timer } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { DrawerProps } from 'element-plus'
const drawer = ref(false)
const closeDrawer = ()=>{
    drawer.value = false
}
interface User {
  id: number
  name: string
  authority: string
}
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}
const characterData = [
  {
    id: 1,
    name: '管理员角色',
    authority: 'admin',
  },
  {
    id: 2,
    name: '普通角色',
    authority: 'user',
  },
  {
    id: 3,
    name: '普通角色',
    authority: 'user',
  },
]
</script>

<style lang="scss" scoped>

.edit{
    margin-bottom: 5px;
    height:fit-content;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 10px;
}
.type{
    text-align: center;
}
</style>