let User = require('./controllers/user');
let Dish = require('./controllers/dish')

module.exports = function (app) {
  // account
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  app.get('/user/logout', User.logout)
  app.get('/user/:userId', User.getById)
  app.get('/dishes', Dish.all)

}
