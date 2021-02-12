require('dotenv').config()
var cors = require('cors')
var bodyParser = require('body-parser');
const express = require('express')
const api=require('./routes/api/secondIndex')

function start(port){
    const app = express()
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(api)

    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`)
  })
    
}

const { PORT } = process.env
start(PORT||8000)

