const Course = require('../models/Course');
const { mongoosesToObject } = require('../../util/mongoose');

class CourseController {
  // GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(course => 
        res.render('courses/show', { course: mongoosesToObject(course) })
      )
      .catch(next)
  }

  create(req, res, next){
    res.render('courses/create');
  }


  //POST 
  store(req, res, next){
      res.json(req.body);
  }

}

module.exports = new CourseController();
