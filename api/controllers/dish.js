let Dish = require('../models/dish.js');

exports.all = function (req, res) {
  Dish.find(function (err, dishes) {
    if (err) return res.status(500).json({msg: '查找失败',err});
    if (dishes) {
      let result = dishes.reduce(function(map, obj) {
          map[obj._id] = { name: obj.name,
            desc: obj.desc,
            poster: obj.poster,
            price: obj.price
          }
          return map;
      }, {});
      return res.json({msg: '读取成功', dishes: result})
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
      dish: {
        _id: dish._id,
        name: dish.name,
        desc: dish.desc,
        poster: dish.poster,
        price: dish.price
      },
      msg: '保存成功'
    })
  })
}
