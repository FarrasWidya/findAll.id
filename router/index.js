const express = require('express')
inRouter = express.Router()
const Controller = require(`../controllers/controller`);

// const jobRouter = require('./jobRoute.js')
// indexRouter.use('/', jobRouter)

// const applicantRouter = require('./applicantRoute');
// indexRouter.use('/',applicantRouter)


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
