const newsRoute = require('./news');
const siteRoute = require('./site');
const coursesRoute = require('./courses');

function route(app) {
    app.use('/news', newsRoute);

    app.use('/courses', coursesRoute);

    app.use('/', siteRoute);

    app.post('/search', (req, res) => {
        console.log(req.body);
        res.render('search');
    });
}

module.exports = route;