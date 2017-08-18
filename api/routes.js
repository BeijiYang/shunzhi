let User = require('./controllers/user');
let Dish = require('./controllers/dish')
let Comment = require('./controllers/comment')
let multer = require('multer')
let uploadAvatar = multer({ dest: './public/uploads/avatars' })
let uploadPoster = multer({ dest: './public/uploads/posters' })



module.exports = function (app) {
  // account
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  app.put('/user', User.update)
  app.get('/user/logout', User.logout)
  app.get('/users', User.all)
  app.get('/user/:userId', User.getById)
  app.post('/add-following', User.addFollowing)
  app.post('/remove-following', User.removeFollowing)


  // comment
  app.post('/comment', Comment.new)
  app.get('/comments', Comment.all)

  // upload avatar
  app.post('/avatar', uploadAvatar.single('avatar'), User.updateAvatar)

  // dish
  app.post('/dish', Dish.new)
  app.post('/dish/poster', uploadPoster.single('poster'), Dish.uploadPoster)

  app.get('/dishes', Dish.all)
}
