const {Agent,Profile,User,Task} = require('../models/index');
const nodemailer = require(`../helpers/nodeMailer.js`)

class Controller {

    static homepage(req,res){
      res.render('homepage')
    }
    static registerPage(req,res){
      res.render(`registerPage`)
      
    }

    static profile(req,res){
      Profile.findByPk(req.params.profileId, {
        include: [{
          model: Task,
          include: {
            model: Agent
          }
        }]
      })
      .then(data => {
        res.render(`profileFinal`, {data})
      })
      .catch(err=> {
        res.send(err)
      })
    }

    static addTask(req,res){
      let thisone = {include: Task}
      let thitwo = 1;
      let thisid = {id: req.params.profileId}
      if (req.query.expertise) {
        thisone.where = {expertise: req.query.expertise}
        thitwo++
      }
      if (req.query.order) {
        thisone.order = [req.query.order, `DESC`]
        thitwo++
      }
      if (thitwo > 1) {
        Agent.findAll(thisone)
        .then(data=>{
          res.render(`addTask`, {data, thisid})
        })
        .catch(err=>{
          res.send(err)
        })
      }else {
        Agent.findAll(thisone)
        .then(data=>{
          res.render(`addTask`, {data, thisid})
        })
        .catch(err2=>{
          res.send(err2)
        })
      }
    }

    static addTaskPost(req,res){
      let value = {
        title:  req.body.title,
        searchingFor: req.body.searchingFor,
        description: req.body.description,
        lastSeenAt: req.body.lastSeenAt,
        lastSeenDate: req.body.lastSeenDate,
        imageUrl: req.body.imageUrl,
        isCompleted: false,
        ProfileId: req.params.profileId,
        AgentId: req.body.AgentId
      } 
      Task.create(value)
      .then(data=>{
        Profile.findByPk(req.params.profileId, {
          include: User
        })
        .then(data2=> {
          nodemailer(data2.User.email)
          res.redirect(`/profile/${req.params.profileId}/confirmPage`)
        })
        .catch(err=> {
          res.send(err)
        })
      })
      .catch(err=>{
        res.send(err)
      })
    }

    static confirmPage(req,res){
      res.render(`confirmPage`)
    }

    static vip(req,res){
      res.render(`VIP`)
    }

    static detailTask(req,res){
      Task.findByPk(req.params.taskId, {
        include: Agent
      },{
        include: Profile
      })
      .then(data =>{
        res.render(`detailTask`, {data})
      })
      .catch(err=>{
        res.send(err)
      })

    }

    static taskCompleted(req,res){
      Task.update({isCompleted: true}, {
        where: {
          id: req.params.taskId
        }
      })
      .then(data=>{
        res.redirect(`/profile/${req.params.profileId}`)
      })
      .catch(err=>{
        res.send(err)
      })
    }

    static cancelTask(req,res){
      Task.delete({
        where: {
          id: req.params.taskId
        }
      })
      .then(data=>{
        res.redirect(`/profile/${req.params.profileId}`)
      })
      .catch(err=>{
        res.send(err)
      })
    }

    static logout(req,res){
      req.session.destroy(err=>{
        if(err){
          res.send(err)
        }else{
          res.redirect('/login')
        }
      })
    }

}

module.exports = Controller