const express = require('express')
const app = express()

app.get('/trang-chu', (req, res) => {
    var a =1;
  res.send('Hello World')
})

app.listen(3000)