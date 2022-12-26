const express = require('express');
const app = express();
const path = require('path');

//see HTTP logger
const morgan = require('morgan');

//config route for web
const route = require('./routes/index');
const db = require('./config/db')
//Connect DB
db.connect();


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);


const hbs = require('express-handlebars');
const { Console } = require('console');

app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

route(app);

app.listen(3000);
