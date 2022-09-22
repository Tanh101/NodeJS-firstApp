const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))


const hbs = require('express-handlebars')
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', './src/resources/views')

app.get('/trang-chu', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(3000)