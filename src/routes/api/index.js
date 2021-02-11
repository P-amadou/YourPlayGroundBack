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

app.get('/login',(req,res)=>{
  let {email}=req.query
  let {mot_de_passe}=req.query
  knex.select('pseudo').from('utilisateur').where({email,mot_de_passe}).then(data => {
    res.json(data)
  })
 // console.log(req.query);
})

app.get('/register',(req,res)=>{
  let {email}=req.query
  if(req.query.mot_de_passe == req.query.confirmer_mot_de_passe) 
  {
    if(knex.select('*').from('utilisateur').where({email}).then) 
    let {mot_de_passe} = req.query
    knex.select('pseudo').from('utilisateur').where({email,mot_de_passe}).then(data => {
      res.json(data)
    })
  }
  
 // console.log(req.query);
})




module.exports = api
