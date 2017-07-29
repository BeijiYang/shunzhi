let Dish = require('../models/dish.js');

exports.all = function (req, res) {
  Dish.find(function (err, dishes) {
    if (err) return res.status(500).json({msg: '查找失败',err});
    if (dishes) {
      return res.json({msg: '读取成功', dishes})
    }
  })
}
