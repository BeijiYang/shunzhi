import React, { Component } from 'react'
import { Table } from 'antd'
import OrderTableColumns from './DishTableColumns'
import { connect } from 'react-redux'


class Dishes extends Component {

  state = {
    dishes: [
      {
        _id: '59819d9cf2b95493d2ee54ec',
        name: '黑森林',
        poster: 'http://xxx.png',
        price: '23',
        desc: '巧克力诱惑'
      }
    ]
  }

  render() {
    console.log('Dishes', this.props.dishes)
    if(Object.keys(this.state.dishes).length !== 0) {
      return (
        <div className='page'>
          <div className='white-block'>
            <div>共{Object.keys(this.state.dishes).length}条</div>
            <Table columns={OrderTableColumns}
              dataSource={this.state.dishes}
              pagination={{
                total: Object.keys(this.props.dishes).length,
                defaultPageSize: 10
              }}
              rowKey={record => record._id}
            />
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all
})

export default connect(mapStateToProps)(Dishes)
