import React from 'react'
import { Table } from 'antd'
import DishTableColumns from './DishTableColumns'

const Dishes = ({ dishes }) => (
  <div className='page'>
    <div className='white-block'>
      <div>共{Object.keys(dishes).length}条</div>
      <Table columns={DishTableColumns}
        dataSource={dishes}
        pagination={{
          total: Object.keys(dishes).length,
          defaultPageSize: 10
        }}
        rowKey={record => record._id}
      />
    </div>
  </div>
)

export default Dishes
