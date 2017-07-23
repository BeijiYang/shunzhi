let User = require('./controllers/user');

module.exports = function (app) {
  // account
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  app.get('/user/logout', User.logout)
  app.get('/user/:userId', User.getById)

}
