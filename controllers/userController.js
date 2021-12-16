const { User,Profile } = require('../models')
const bcrypt =require('bcryptjs');

class UserController {
  static registerForm(req, res) {
    res.render('registerFinal')
  }
  static postRegister(req, res) {
    const { email, password, role,username,age,gender } = req.body

    User.create({ email, password, role })

      .then(data => {
        console.log(data.id)
        return Profile.create ({username,age,gender,UserId : data.id})
      })
      .then(data =>{
        res.redirect("/login")
      })
      .catch(err => {
        res.send(err.errors.map(el => el.message))
      })
  }

  static loginform(req, res) {
    const {error} = req.query
    res.render('LogInFInal',{error}) // error jika ada username atau password salah taruh di ejs
  }

  static postLogin(req, res) {
    const { email, password } = req.body
    User.findOne({
      where:{
        email : email
      }
    })
    .then(data=>{
      // console.log(req.session.users)

      if(data){
        const isValidPassword = bcrypt.compareSync(password,data.password)

        if(isValidPassword){
          return res.redirect(`/profile/${data.id}`)
        }else{
          const error = "Your password is wrong, try again."
          return res.redirect(`/login?error=${error}`)
        }
      }else{
        const error = "Your email is wrong, try again."
        return res.redirect(`/login?error=${error}`)
      }
    })
    .catch(err =>{
      res.send(err)
    })
  }
}
module.exports = UserController