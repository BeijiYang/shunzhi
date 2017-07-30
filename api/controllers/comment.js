let Comment = require('../models/comment.js')
let User    = require('../models/user.js')

exports.new = function (req, res) {
  let comment = req.body;
  console.log('comment', comment)
  comment = new Comment(comment)
  comment.save(function (err, comment) {
    if (err) return res.status(500).json({msg: '保存失败，请重试',err})
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
  Comment.find().populate('user', 'username avatar slogan').exec().then(
    comments => {
      console.log(comments)
      return res.json({msg: '读取成功', comments})
    }
  )
}

  // (function (err, comments) {
  //   if (err) return res.status(500).json({msg: '查找失败',err});
  //   if (comments) {
  //     let result = comments.reduce(function(map, obj) {
  //         map[obj._id] = { name: obj.name,
  //           userId: obj.userId,
  //           content: obj.content
  //         }
  //         return map;
  //     }, {});
  //     return res.json({msg: '读取成功', comments: result})
  //   }
  // })
