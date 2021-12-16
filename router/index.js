const express = require('express')

const req = require('express/lib/request')
const indexRouter = express.Router()
const Controller = require('../controllers/controller');
const userController = require('../controllers/userController');

indexRouter.get('/', Controller.homepage)// isiny homepage dan login/register

inRouter = express.Router()


const userRouter = require('./userRouter')
indexRouter.use('/', userRouter)



inRouter.get('/', Controller.homepage)
inRouter.get(`/register`, userController.registerForm)
inRouter.post(`/register`, userController.postRegister)
inRouter.get('/login', userController.loginform)
inRouter.post('/login', userController.postLogin)

// inRouter.use((req,res,next) => {
//   if(req.session.profile) {
//     next()
//   } else {
//     let errors = "Please log in first"
//     res.redirect(`/login?errors=${errors}`)
//   }
// })

inRouter.get(`/profile/:profileId`, Controller.profile)

inRouter.get(`/profile/:profileId/newTask`, Controller.addTask)
inRouter.post(`/profile/:profileId/newTask`, Controller.addTaskPost)

inRouter.get(`/profile/:profileId/confirmPage`, Controller.confirmPage)

inRouter.get(`/profile/:profileId/VIP`, Controller.vip)

inRouter.get(`/profile/:profileId/:taskId`, Controller.profile)
inRouter.get(`/profile/:profileId/:taskId/completed`, Controller.profile)
inRouter.get(`/profile/:profileId/:taskId/cancel`, Controller.profile)





module.exports = inRouter

