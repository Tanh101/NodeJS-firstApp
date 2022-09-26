const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()

const route = require('./routes/index')

const newsController = require('NewsController')
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended:true
}));


const hbs = require('express-handlebars')
const { Console } = require('console')

app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', './src/resources/views')

app.get('/', (req, res) => {
  res.render('home');
})


route(app);


app.listen(3000)