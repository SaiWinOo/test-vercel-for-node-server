// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

app.get('/test',(req,res)=> {
  return res.json({
    name : 'Sai Win Oo',
    purpose : 'Testing for new up coming projects!'
  });
})

// Export the Express API
module.exports = app