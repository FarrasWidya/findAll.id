const express = require('express');
const userRouter = express.Router()
const Controller = require('../controllers/controller');

// userRouter.get('/register', (req, res) => {
//   res.send('Hello World!')
// })//register
// userRouter.post('/register', (req, res) => {
//   res.send('Hello World!')
// })//register
// userRouter.get('/login', (req, res) => {
//   res.send('Hello World!')
// })//login
// userRouter.post('/login', (req, res) => {
//   res.send('Hello World!')
// })//login

// userRouter.get('/profile', (req, res) => {
//   res.send('Hello World!')
// })//profile - add task -task list
userRouter.get('/task', (req, res) => {
  res.send('Hello World!')
})// list task
userRouter.get('/task/add', (req, res) => {
  res.send('Hello World!')
})//add task form
userRouter.get('/task/:id', (req, res) => {
  res.send('Hello World!')
})//task detail
userRouter.get('/', (req, res) => {
  res.send('Hello World!')
})//add agent
userRouter.get('/', (req, res) => {
  res.send('Hello World!')
})//confirmation page - cart confirmation

module.exports = userRouter