require('dotenv').config()
var cors = require('cors')
const express = require('express')
const api=require('./routes/api')

function start(port){
    const app = express()
    app.use(cors())
    app.use(api)

    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`)
  })
    
}

const { PORT } = process.env
start(PORT||3000)

