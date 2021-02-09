require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT||3000}`)
})