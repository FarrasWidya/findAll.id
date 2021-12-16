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
inRouter.use(function(req,res,next){
if (!req.session.userId) {
  const error = `Please Log in!`
  res.redirect(`/login?error=${error}`)
}else {
  next()
}
})

inRouter.get(`/profile/:profileId`, Controller.profile)

inRouter.get(`/profile/:profileId/newTask`, Controller.addTask)
inRouter.post(`/profile/:profileId/newTask`, Controller.addTaskPost)

inRouter.get(`/profile/:profileId/confirmPage`, Controller.confirmPage)//ini ejs masih jelek

inRouter.get(`/profile/:profileId/logout`, Controller.logout)

inRouter.get(`/profile/:profileId/VIP`, Controller.vip)//ini nanti ae

inRouter.get(`/profile/:profileId/:taskId`, Controller.detailTask)//ini belom
inRouter.get(`/profile/:profileId/:taskId/completed`, Controller.taskCompleted)//belom
inRouter.get(`/profile/:profileId/:taskId/cancel`, Controller.cancelTask)//belom





module.exports = inRouter

