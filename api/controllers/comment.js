let Comment = require('../models/comment.js');

exports.new = function (req, res) {
  let comment = req.body;
  console.log('comment', comment)
  comment = new Comment(comment)
  comment.save(function (err, comment) {
    if (err) return res.status(500).json({msg: '保存失败，请重试',err})
    res.json({
      comment: {
        _id: comment._id,
        userId: comment.userId,
        content: comment.content
      },
      msg: '注册成功'
    })
  })
}

exports.all = function (req, res) {
  Comment.find(function (err, comments) {
    if (err) return res.status(500).json({msg: '查找失败',err});
    if (comments) {
      let result = comments.reduce(function(map, obj) {
          map[obj._id] = { name: obj.name,
            userId: obj.userId,
            content: obj.content
          }
          return map;
      }, {});
      return res.json({msg: '读取成功', comments: result})
    }
  })
}
