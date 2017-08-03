import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const OrderTableColumns = [{
  title: '店铺名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '创建时间',
  dataIndex: 'createdAt',
  key: 'createdAt',
  render: (text) => {
    return <span>{moment(text).format('YYYY-MM-DD kk:mm:ss')}</span>
  },
}, {
  title: '更新时间',
  dataIndex: 'updatedAt',
  key: 'updatedAt',
  render: (text) => {
    return <span>{moment(text).format('YYYY-MM-DD kk:mm:ss')}</span>
  },
}, {
  title: '操作',
  dataIndex: '_id',
  key: '_id',
  render: (text) => {
    return <Link to={`/dashboard/shops/${text}`}>查看</Link>
  },
}]

export default OrderTableColumns
