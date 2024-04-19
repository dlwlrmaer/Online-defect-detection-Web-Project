const mongoose = require('mongoose')
const Schema = mongoose.Schema
// user模型===>users集合

const UserType = {
    username: String,
    password: String,
    gender: Number, //性别，0，1，2
    introduction: String,
    avatar: String,
    role: Number //管理员1，编辑2
}
const UserModel = mongoose.model('users', new Schema(UserType))

module.exports = UserModel