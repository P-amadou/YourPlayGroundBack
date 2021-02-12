const dotenv = require('dotenv')
dotenv.config()
const {development}= require('../../../knexfile')
var knex = require('../../../knex/knex.js')(development);
const { Router } = require('express')
const api = Router()
const{MAILJET_API_ID,MAILJET_API_SECRET}=process.env


api.get('/search',(req,res)=>{
  knex.clear('select').clear('where')
  let {nom}=req.query
  knex.select('*').from('terrain').where('nom','like', `%${nom}%`).then(data => {
    res.json(data)
  })
})

api.post('/login',(req,res)=>{
  knex.clear('select').clear('where')
  let {email}=req.body
  let {mot_de_passe}=req.body
  knex.select('pseudo').from('utilisateur').where({email,mot_de_passe}).then(data => {
    res.json(data)
  })
})

api.post('/register',(req,res)=>{
  knex = require('../../../knex/knex.js')(development);
  let {email}=req.body
  let {pseudo}=req.body
  if(req.body.mot_de_passe == req.body.confirmer_mot_de_passe) 
  { 
    let {mot_de_passe} = req.body;
    knex.select('*').from('utilisateur').where({email : email}).then(data =>{
      if(data.length == 0)
      {
        knex.insert({pseudo : pseudo,email : email,mot_de_passe : mot_de_passe}).returning('*').into('utilisateur').then(user =>{
          res.json(user)
          const mailjet = require ('node-mailjet')
          .connect(MAILJET_API_ID,MAILJET_API_SECRET)
          const request = mailjet
          .post("send", {'version': 'v3.1'})
          .request({
            "Messages":[
              {
                "From": {
                  "Email": "amadoudieye49@gmail.com",
                  "Name": "Amadou"
                },
                "To": [
                  {
                    "Email": email,
                    "Name": pseudo
                  }
                ],
                "Subject": "Register YPG from Mailjet.",
                "TextPart": "My first Mailjet email",
                "HTMLPart": "<h3>Dear user, welcome you have been register to YPG!",
                "CustomID": "AppGettingStartedTest"
              }
            ]
          })
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

        })
      }
    })
  }
})

api.put('/editEmail',(req,res)=>{
  let {pseudo}=req.body
  let {email}=req.body
      knex('utilisateur').update('email', email ).whereNot(email, email)
  })

api.put('/editPseudo',(req,res)=>{
  let {pseudo}=req.body
  let {email}=req.body

    knex('utilisateur').update('pseudo', pseudo )//.whereNot(email, email)
  })






module.exports = api
