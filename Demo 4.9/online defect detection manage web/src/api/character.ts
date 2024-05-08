import {$get,$post} from '../utils/request.ts'

//返回角色列表
export const $list = async () => {
    let ret = await $get('Role/List')
    console.log(ret);
}