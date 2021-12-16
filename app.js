const express = require('express')
const app = express()
const port = 3000
const routes = require(`./router`)
const Controller = require('./controllers/controller');
const session = require('express-session');


app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'password rahasia',
  resave : false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    samesite: true
  }
}))


app.use('/', express.static('public'))
const indexRouter = require('./router/index');
app.use('/', indexRouter)

app.use(`/`, routes)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})