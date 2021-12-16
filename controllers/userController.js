const { User } = require('../models')
const bcrypt =require('bcryptjs');

class UserController {
  static registerForm(req, res) {
    res.render('registerFinal')
  }
  static postRegister(req, res) {
    const { username, password, role } = req.body

    User.create({ username, password, role })

      .then(data => {
        res.redirect("/login")
      })

      .catch(err => {
        res.send(err)
      })
  }

  static loginform(req, res) {
    const {error} = req.query
    res.render('homepageFinal',{error}) // error jika ada username atau password salah taruh di ejs
  }

  static postLogin(req, res) {
    const { username, password } = req.body
    User.findOne({
      where:username
    })
    .then(data=>{
      if(data){
        const isValidPassword = bcrypt.compareSync(password,data.password)

        if(isValidPassword){
          return res.redirect('/profile')
        }else{
          const error = "Your username/password is wrong, try again."
          return res.redirect(`/login?error=${error}`)
        }
      }else{
        const error = "Your username/password is wrong, try again."
        return res.redirect(`/login?error=${error}`)
      }
    })
    .catch(err =>{
      res.send(err)
    })
  }
}
module.exports = UserController