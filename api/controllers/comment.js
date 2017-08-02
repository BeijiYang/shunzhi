let Comment = require('../models/comment.js')
let User    = require('../models/user.js')

exports.new = function (req, res) {
  let comment = req.body;
  console.log('comment', comment)
  comment = new Comment(comment)
  comment.save(function (err, comment) {
    if (err) return res.status(403).json({msg: '保存失败，请重试',err})
    res.json({
      comment: {
        _id: comment._id,
        content: comment.content
      },
      msg: '保存评论成功'
    })
  })
}

exports.all = function (req, res) {
  Comment.find().populate('user dish', 'username avatar slogan poster').exec().then(
    comments => {
      let result = comments.reduce(function(map, obj) {
          map[obj._id] = {
            user: obj.user,
            dish: obj.dish,
            content: obj.content,
            createdAt: obj.createdAt
          }
          return map;
      }, {})
      return res.json({msg: '读取所有评论成功', comments: result })
    }
  )
}
