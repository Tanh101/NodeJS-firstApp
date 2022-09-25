const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));

const hbs = require('express-handlebars')
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', './src/resources/views')

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get("/search", (req, res) => {
  res.render('search');
})

app.listen(3000)