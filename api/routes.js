let User = require('./controllers/user');
let Dish = require('./controllers/dish')
let Comment = require('./controllers/comment')

module.exports = function (app) {
  // account
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  app.put('/user', User.update)
  app.get('/user/logout', User.logout)
  app.get('/users', User.all)
  app.get('/user/:userId', User.getById)
  app.get('/dishes', Dish.all)

  // comment
  app.post('/comment', Comment.new)
  app.get('/comments', Comment.all)
}
