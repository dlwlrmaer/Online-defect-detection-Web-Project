import {$get} from '../utils/request.ts'
import { md5 } from 'md5js';
//登录方法
export const $Login = async(params:object)=>{
    //对密码进行加密
    params.loginPwd = md5((md5(params.loginPwd,32).split('').reverse().join('')),32)
    let ret = await $get('Admin/Login',params)
    if(ret.success){
        //登录成功后，将token信息保存到浏览器缓存中
        sessionStorage.setItem('token',ret.token)//浏览器关闭后自动清除
        //localStorage.setItem('token','')//关闭后一直存在
    }
    console.log(ret);
}