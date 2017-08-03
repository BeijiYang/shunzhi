# 后台 API

请求链接： http://yummy.haoduoshipin.com


### 注册功能

```
POST /user/signup
```

接收数据

```js
{
  username `String` 用户名
  password 'String' 密码
}
```

用户不可重复注册，重复返回403错误

采用 err.response.data.msg 拿到

```js
{
  msg: '用户名重复，请重新注册'
}
```

添加成功返回

```js
{
  userId: user._id,
  username: user.username,
  msg: '注册成功'
}
```

### 登录功能

```
POST /user/login
```

接收数据


```js
username `String` 用户名
password 'String' 密码
```

错误返回：

采用 err.response.data.msg 拿到

```
{msg: '登陆失败，用户名不存在'}
{msg: '密码错误，请核对后重试'}
```

正确返回：

```
{
  userId: user._id,
  username: user.username,
  msg: '登陆成功'
}
```

### 读取 dishes

```
GET /dishes
```

返回

```
{"msg":"读取成功","dishes":[{"_id":"597be20c2bbfdbaa14bfa248","name":"草莓派","poster":"http://media.haoduoshipin.com/yummy/dishes/dish1.jpg","desc":"草莓，果酱，芝士，非常甜美可口","price":"23"},{"_id":"597be2122bbfdbaa14bfa249","name":"提拉米苏","poster":"http://media.haoduoshipin.com/yummy/dishes/dish2.jpg","desc":"俄罗斯风味，芝士，非常甜美可口","price":"33"},{"_id":"597be2182bbfdbaa14bfa24a","name":"黑森林","poster":"http://media.haoduoshipin.com/yummy/dishes/dish3.jpg","desc":"很多巧克力，芝士，非常甜美可口","price":"33"}]}%
```


### 发评论

```
POST /comment
```

接收数据


```js
content: `String`
user: `ObjectId` 评论者的 id
dish: `ObjectId` 当前 dish 的 id
```

成功返回：

```
{
  comment : {
    content : "my comment"
    _id : "5980116e148fa3d9d5b5c5cf"
  }
  msg : "保存评论成功"
}
```

失败返回：

```
{
  msg: '保存失败，请重试',
  err
}
```

### 更新用户个性签名

```
PUT /user
```

接收数据

```
{
  slogan: `String`,
  username: `String`
}

```

成功返回

```
{
  user: {
    slogan: user.slogan,
    username: user.username,
    avatar: user.avatar
  },
  msg: '更新成功'
}
```

失败返回

```
{
  msg: '注册失败，
  请重试',err
}
```


### 更新头像


```
POST /avatar
```


请求报头

```
ContentType: mutlipart
```

请求数据

```
{
  avatar: file # formData.append(file)
  userId: `String` # formData.append(userId)
}
```

成功返回：

```
{
  user: {
    slogan: user.slogan,
    username: user.username,
    avatar: user.avatar
  },
  msg: '用户头像更新成功'
}
```

错误返回

```
{
  message: '没有该用户'
}
```


### 提交菜品


```
POST /dish
```

接收参数

````
{
  name: `String`,
  desc: `String`,
  poster: `String`,
  price: `String`
}
```

注意：上面四项均为必填项。

成功返回

```
{
  dish: {
    _id: dish._id,
    name: dish.name,
    desc: dish.desc,
    poster: dish.poster,
    price: dish.price
  },
  msg: '保存成功'
}
```

失败返回：

```
{
  message: 保存失败
}
```
