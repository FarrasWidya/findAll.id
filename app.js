const express = require('express')
const app = express()
const port = 3000
const Controller = require('./controllers/controller');
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', Controller.homepage)// isiny homepage dan login/register
app.get('/', (req, res) => {
  res.send('Hello World!')
})//register
app.post('/', (req, res) => {
  res.send('Hello World!')
})//register
app.get('/', (req, res) => {
  res.send('Hello World!')
})//profile - add task -task list
app.get('/', (req, res) => {
  res.send('Hello World!')
})// list task
app.get('/', (req, res) => {
  res.send('Hello World!')
})//task detail
app.get('/', (req, res) => {
  res.send('Hello World!')
})//add task form
app.get('/', (req, res) => {
  res.send('Hello World!')
})//add agent
app.get('/', (req, res) => {
  res.send('Hello World!')
})//confirmation page - cart confirmation

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})