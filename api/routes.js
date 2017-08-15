let User = require('./controllers/user');
let Dish = require('./controllers/dish')
let Comment = require('./controllers/comment')
let multer = require('multer')
var upload = multer({dest: './public/uploads/avatars'})


module.exports = function (app) {
  // account
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  app.put('/user', User.update)
  app.get('/user/logout', User.logout)
  app.get('/users', User.all)
  app.get('/user/:userId', User.getById)
  app.post('/add-following', User.addFollowing)


  // comment
  app.post('/comment', Comment.new)
  app.get('/comments', Comment.all)

  // upload avatar
  app.post('/avatar', upload.single('avatar'), User.updateAvatar)
  app.post('/touxiang', upload.single('avatar'), User.updateTouxiang)

  // dish
  app.post('/dish', Dish.new)
  app.get('/dishes', Dish.all)

}
