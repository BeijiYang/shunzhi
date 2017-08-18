import React from 'react'
import { Link } from 'react-router-dom'
import Settings from '../../../settings'

const DishTableColumns = [
  {
    title: '海报',
    dataIndex: 'poster',
    key: 'poster',
    render: (text) => {
      return <img className="poster" src={Settings.host + '/uploads/posters/' + text} />
    },
  },
  {
    title: '菜品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    render: (text) => {
      return <span>{`${text}元`}</span>
    },
  },
  {
    title: '操作',
    dataIndex: '_id',
    key: '_id',
    render: (text) => {
      return <Link to={`/dashboard/dishes/${text}`}>修改</Link>
    },
  }
]

export default DishTableColumns
