var express = require('express');
const UserRouter = require('../../controllers/admin/UserController');
const UserController = require('../../controllers/admin/UserController');
var UserRouter = express.Router();

/* GET home page. */
UserRouter.post("/adminapi/user/login",UserController.login);

module.exports = UserController;