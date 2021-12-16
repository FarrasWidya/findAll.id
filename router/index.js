const express = require('express')
const req = require('express/lib/request')
const indexRouter = express.Router()
const Controller = require('../controllers/controller');


indexRouter.get('/', Controller.homepage)// isiny homepage dan login/register

const userRouter = require('./userRouter')
indexRouter.use('/', userRouter)



module.exports = indexRouter


// userRouter.get('/register', (req, res) => {
  //   res.send('Hello World!')
  // })//register
  // userRouter.post('/register', (req, res) => {
  //   res.send('Hello World!')
  // })//register
  // userRouter.get('/profile', (req, res) => {
  //   res.send('Hello World!')
  // })//profile - add task -task list