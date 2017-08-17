let User = require('../models/user.js')

exports.signup = function (req, res) {
  let _user = req.body;
  User.findOne({username:_user.username},function (err,user) {
    if (err) return res.status(500).json({msg: '注册失败，请重试',err});
    if (user) {
      return res.status(403).json({msg: '用户名重复，请重新注册'})
    }else {
      _user.username = _user.username.trim()
      user = new User(_user);
      user.save(function (err,user) {
        if (err) return res.status(500).json({msg: '注册失败，请重试',err});
        res.json({
          userId: user._id,
          username: user.username,
          msg: '注册成功'
        })
      })
    }
  })
}

exports.update = function (req, res) {
  let _user = req.body;
  User.findOne({username:_user.username},function (err,user) {
    if (err) return res.status(500).json({msg: '更新失败，请重试',err});
    if (user) {
      if(_user.slogan.trim() === ''){
        return res.status(500).json({msg: '提交 slogan 为空',err});
      }
      user.slogan = _user.slogan
      user.save(function (err,user) {
        if (err) return res.status(500).json({msg: '更新失败，请重试',err});
        res.json({
          user: {
            _id: user._id,
            slogan: user.slogan,
            username: user.username,
            avatar: user.avatar,
            followings: user.followings
          },
          msg: '更新成功'
        })
      })
    }
  })
}

exports.login = function (req, res) {
  var _user = req.body;
  User.findOne({username:_user.username.trim()},function (err,user) {
    if (err) return res.status(500).json({msg: '登陆失败，请重试',err});
    if (!user) {
      return res.status(401).json({msg: '登陆失败，用户名不存在'})
    }
    user.comparePassword(_user.password, function (err, isMatch) {
      if (err) return res.status(500).json({msg: '登陆失败，请重试',err});
      if (isMatch) {
        res.json({
          user: {
            userId: user._id,
            username: user.username,
            slogan: user.slogan,
            avatar: user.avatar,
            followings: user.followings
          },
          msg: '登陆成功'
        })
      }else {
        res.status(401).json({msg: '密码错误，请核对后重试'})
      }
    })
  })
}

// 登出功能
exports.logout = function (req,res) {
  res.json({ msg: '登出成功' })
}

// 通过 id 拿到用户信息

exports.getById  = function (req, res) {
  User.findOne({_id: req.params.userId},function (err,user) {
    if (err) return res.status(500).json({msg: '查找用户失败',err});
    if (user) {
      return res.json({msg: '读取用户成功', user: {
        _id: user._id,
        username: user.username,
        avatar: user.avatar,
        slogan: user.slogan,
        followings: user.followings
      }})
    }
  })
}

exports.removeFollowing = function(req, res) {
  User.findOne({ _id: req.body.currentUserId })
  .exec().then(
    user => {
      let followings = user.followings
      let { userId } = req.body
      console.log('followings', followings)
      console.log('userId', userId)
      let index = followings.indexOf(userId)
      console.log('xxxx', index)
      followings.splice(index, 1);
      console.log('followings--0000', followings)
      user.save(() => {
        res.json({
          user: {
            username: user.username,
            _id: user._id,
            slogan: user.slogan,
            avatar: user.avatar,
            followings: user.followings
          },
          msg: '好友删除成功'
        })
      })
    }
  )
}

exports.addFollowing = function (req, res) {
  User.findOne({ _id: req.body.currentUserId })
  // .populate('followings', 'username')
  .exec().then(
    user => {
      let followings = user.followings
      let { userId } = req.body
      let followingsCopy = followings.map(item => {
        return item.toString()
      })
      let isHere = followingsCopy.includes(userId)
      if (!isHere) {
        followings.push(req.body.userId)
        user.save(() => {
          res.json({
            msg: "添加成功",
            user: {
              username: user.username,
              _id: user._id,
              slogan: user.slogan,
              avatar: user.avatar,
              followings: user.followings
            }
          })
        })
      } else {
        res.json({
          msg: '早就添加过了',
          user: {
            username: user.username,
            _id: user._id,
            slogan: user.slogan,
            avatar: user.avatar,
            followings: user.followings
          }
         })
      }
    }
  )
}


// 读取所有用户
exports.all = function(req, res) {

  User.find()
  // .populate('followings', 'username')
  .exec().then(
    users => {
        res.json({ users })
      })

  // User.find((err, users) => {
  //   if (err) return res.status(500).json({msg: '查找失败',err});
  //   if (users) {
  //     let result = users.reduce(function(map, obj) {
  //         map[obj._id] = { name: obj.name,
  //           username: obj.username,
  //           slogan: obj.slogan,
  //           avatar: obj.avatar
  //         }
  //         return map;
  //     }, {});
  //     return res.json({msg: '读取成功', users: result})
  //   }
  // })
}


exports.updateAvatar = function(req, res) {
  let user = new User()
  console.log('updateAvatar', req.body)
  User.findOne({_id: req.body.userId},function (err,user) {
    if(user) {
      if(req.file && req.file.filename) {
        console.log('filename', req.file.filename)
        user.avatar = req.file.filename
      }
      user.save(err => {
        if(err) return console.log(err)
        res.json({
          user: {
            avatar: user.avatar,
            followings: user.followings,
            _id: user._id,
            username: user.username,
            slogan: user.slogan
          },
          message: '用户头像更新成功'
        })
      })
    } else {
      res.status(404).json({
        message: '没有该用户'
      })
    }
  })

}


exports.updateTouxiang = function(req, res) {
  let user = new User()
  console.log('updateTouxiang', req.body)
  if(req.file && req.file.filename) {
    console.log('filename...', req.file.filename)
  }
  res.json({
    filename: req.file.filename,
    message: '上传成功'
  })
}
