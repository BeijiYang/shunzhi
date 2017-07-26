# 后台 API

## 用户注册登录

实现登录注册

#### 注册功能

```
POST /user/signup
```

接收数据

```js
username `String` 用户名
password 'String' 密码
```

用户不可重复注册，重复返回403错误

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
