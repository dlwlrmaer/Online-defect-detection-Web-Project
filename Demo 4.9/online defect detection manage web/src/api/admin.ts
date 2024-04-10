import { $get } from '../utils/requests.ts'

//登录方法
export const $Login = async(params:object)=>{
    let ret = $get('Admin/Login',params)
    console.log(ret);
}