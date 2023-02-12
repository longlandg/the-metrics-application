const express = require('express')
const app = express()
const cors= require('cors')


const port = 8000


app.get('/time', (req, res) => {

  res.send('time')

})

app.get('/metrics', (req, res) => {

  res.send('metrics')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})