const {development}= require('../../../knexfile')
const knex = require('../../../knex/knex.js')(development);
const { Router } = require('express')
const api = Router()


api.get('/search',(req,res)=>{
  knex.clear('select').clear('where')
  let {nom}=req.query
  knex.select('*').from('terrain').where('nom','like', `%${nom}%`).then(data => {
    res.json(data)
  })
})

api.get('/login',(req,res)=>{
  let {email}=req.query
  let {mot_de_passe}=req.query
  knex('utilisateur').select('pseudo').where({email,mot_de_passe}).then(data => {
    res.json(data)
  })
 // console.log(req.query);
})

api.post('/register',(req,res)=>{
  let {email}=req.query
  let {pseudo}=req.query
  console.log(req.query)
  console.log(req.params)
  console.log(email)
  console.log(pseudo)
  if(req.query.mot_de_passe == req.query.confirmer_mot_de_passe) 
  {
    let {mot_de_passe} = req.query;
    knex.insert({pseudo : pseudo,email : email,mot_de_passe : mot_de_passe}).returning('*').where({email : email}).into('utilisateur').then((user)=>{
      res.json(user.toString())
      })
    
  }
})






module.exports = api
