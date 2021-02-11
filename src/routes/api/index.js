const {development}= require('../knexfile')
const knex = require('../knex/knex.js')(development);
const { Router } = require('express')
const api = Router()

api.get('/', (_, res) => {
    res.send('Hello API!')
  })

api.get('/search',(req,res)=>{
  let {nom}=req.query
  knex("terrain").select("*").where("nom","like", nom).then(data => {
    res.json(user.data)
  })
})

module.exports = api
