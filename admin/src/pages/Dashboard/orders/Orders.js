import React, { Component } from 'react'
import { Table } from 'antd'
import OrderTableColumns from './OrderTableColumns'


class Orders extends Component {
  state = {
    shops: [],
    total: 4,
  }



  render() {
    return (
      <div className='page'>
        <div className='white-block'>
          <div>共{this.state.total}家店铺</div>
          <Table columns={OrderTableColumns}
            dataSource={this.state.shops}
            pagination={{
              total: this.state.total,
              defaultPageSize: 10
            }}
            rowKey={record => record._id}
          />
        </div>
      </div>
    )
  }
}

export default Orders
