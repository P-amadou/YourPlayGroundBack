const { Router } = require('express')

const api = Router()

api.get('/', (_, res) => {
    res.send('Hello API!')
  })

module.exports = api
