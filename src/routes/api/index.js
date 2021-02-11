const {development}= require('../../../knexfile')
const knex = require('../../../knex/knex.js')(development);
const { Router } = require('express')
const api = Router()

api.get('/search/:nom',(req,res)=>{
  knex.clear('select').clear('where')
  let {nom}=req.params
  knex.select('*').from('terrain').where('nom','like', `%${nom}%`).then(data => {
    res.json(data)
  })
})

api.get('/api', (_, res) => {
    res.send('Hello API!')
  })

module.exports = api
