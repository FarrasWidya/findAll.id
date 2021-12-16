const {Agent,Profile,User,Task} = require('../models/index');

class Controller {

    static homepage(req,res){
      res.render('homepage')
    }
    static registerPage(req,res){
      res.render(`registerPage`)
      
    }

    static createUser(req,res){
      valUser = {
        email: req.body.email,
        password: req.body.password,
        role: `reguler`
      }
      valProfie = {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        ktp: req.body.ktp
      }
      User.create(valUser)
      .then(data=>{
        Profile.create(valProfile)
        .then(data2 => {
          res.redirect(`/profile/${data.id}`)
        })
        .catch(err2=> {
          res.send(err)
        })
      })
      .catch(err=>{
        res.send(err)
      })
    }

    static profile(req,res){
      Profile.findByPk(req.params.profileId, {
        include: [Task, Agent]
      })
      .then(data => {
        res.render(`profile`, {data})
      })
      .catch(err=> {
        res.send(err)
      })
    }

    static addTask(req,res){
      res.render(`addTask`)
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
        ProfileId: req.params.ProfileId,
        AgentId: req.params.AgentId
      } 
      Task.create(value)
      .then(data=>{
        res.redirect(`/profile/${req.params.ProfileId}/confirmPage`)
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

}

module.exports = Controller