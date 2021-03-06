let Dish = require('../models/dish.js');


exports.remove = function (req, res) {
  let { id } = req.params
  Dish.findById({_id: id}, function(err, dish) {
    if (err) return res.status(500).json({error: err.message});
    if (dish) {
      dish.remove(function(err){
        if (err) return res.status(500).json({error: err.message});
        setTimeout(() => res.json({ message: '删除成功！' }), 3000)
      })
    }
  })
}

exports.all = function (req, res) {
  Dish.find(function (err, dishes) {
    if (err) return res.status(500).json({msg: '查找失败',err});
    if (dishes) {
      return setTimeout(() => res.json({msg: '读取成功', dishes}), 3000)
    }
  })
}


exports.new = function (req, res) {
  let dish = req.body;
  console.log('dish', dish)
  dish = new Dish(dish)
  dish.save(function (err, dish) {
    if (err) return res.status(403).json({msg: '保存失败，请重试',err})
    res.json({
      dish,
      msg: '保存成功'
    })
  })
}

exports.uploadPoster = function (req, res) {
  res.json({
    filename: req.file.filename
  })
}
