var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users');
var sessionController = require('../controllers/sessions');

// Session routes
router.route('/users/login')
      .post(sessionController.create)
      .delete(sessionController.delete);

router.route('/sessions/new')
      .get(sessionController.new);

// User routes
router.route('/users')
      .post(usersController.create);

router.route('/users/:id')
      .patch(usersController.update);

module.exports = router;
