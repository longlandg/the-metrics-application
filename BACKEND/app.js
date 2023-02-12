const express = require('express')
const app = express()
const cors= require('cors')

const makeEpochTimeObject = require('./functions/makeEpochTimeObject')
app.use(cors())
const port = 8001


app.get('/time', (req, res) => {

  res.send(makeEpochTimeObject())

})

app.get('/metrics', (req, res) => {

  res.send('metrics')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})