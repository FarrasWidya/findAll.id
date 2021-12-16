const express = require('express')

const req = require('express/lib/request')
const indexRouter = express.Router()
const Controller = require('../controllers/controller');


indexRouter.get('/', Controller.homepage)// isiny homepage dan login/register

inRouter = express.Router()


const userRouter = require('./userRouter')
indexRouter.use('/', userRouter)




inRouter.get('/', Controller.homepage)

inRouter.get(`/register`, Controller.registerPage)
inRouter.post(`/register`, Controller.createUser)

inRouter.get(`/profile/:profileId`, Controller.profile)

inRouter.get(`/profile/:profileId/newTask`, Controller.addTask)
inRouter.post(`/profile/:profileId/newTask`, Controller.addTaskPost)

inRouter.get(`/profile/:profileId/confirmPage`, Controller.confirmPage)

inRouter.get(`/profile/:profileId/VIP`, Controller.vip)

inRouter.get(`/profile/:profileId/:taskId`, Controller.profile)
inRouter.get(`/profile/:profileId/:taskId/completed`, Controller.profile)
inRouter.get(`/profile/:profileId/:taskId/cancel`, Controller.profile)





module.exports = inRouter

