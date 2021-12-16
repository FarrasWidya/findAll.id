const express = require('express')

const req = require('express/lib/request')
const indexRouter = express.Router()
const Controller = require('../controllers/controller');
const userController = require('../controllers/userController');

indexRouter.get('/', Controller.homepage)// 
ProfileRouter = express.Router()
const userRouter = require('./userRouter')
indexRouter.use('/', userRouter)



ProfileRouter.get(`/profile/:profileId`, Controller.profile)

ProfileRouter.get(`/profile/:profileId/newTask`, Controller.addTask)
ProfileRouter.post(`/profile/:profileId/newTask`, Controller.addTaskPost)

ProfileRouter.get(`/profile/:profileId/confirmPage`, Controller.confirmPage)//ini ejs masih jelek

ProfileRouter.get(`/profile/:profileId/logout`, Controller.logout)

ProfileRouter.get(`/profile/:profileId/VIP`, Controller.vip)//ini nanti ae

ProfileRouter.get(`/profile/:profileId/:taskId`, Controller.detailTask)//ini belom
ProfileRouter.get(`/profile/:profileId/:taskId/completed`, Controller.taskCompleted)//belom
ProfileRouter.get(`/profile/:profileId/:taskId/cancel`, Controller.cancelTask)//belom

module.exports = ProfileRouter

// router profile disini biar di index ga banyak, takutnya dimarahin nanti.