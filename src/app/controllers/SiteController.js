const Course = require('../models/Course')
class SiteController {
  //GET /
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if (!err)
    //     return res.json(courses);
    //   return res.status(400).json({ error: 'ERROR' });
    // });

    Course.find({})
      .then(courses => res.render('home'))
      .catch(next)
  }

  // GET /search
  search(req, res) {
    res.render('search');
  }


}

module.exports = new SiteController();
