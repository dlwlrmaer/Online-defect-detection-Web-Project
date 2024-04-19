const UserController = {
    login:async (req,res)=>{
        //req.body
        var result = await UserService.login(req.body)
        // 处理登录逻辑
        if(result.length === 0){
            res.send({
                code:'-1',
                error:"用户名或密码错误"
            })
        }else{
            res.send({
                ActionType:"OK"
            })
        }
    }
}

module.exports = UserController;