import React, { Component } from 'react'
import { Table } from 'antd'
import OrderTableColumns from './DishTableColumns'
import { connect } from 'react-redux'


class Dishes extends Component {

  render() {
    console.log('Dishes', this.props.dishes)
    if(Object.keys(this.props.dishes).length !== 0) {
      return (
        <div className='page'>
          <div className='white-block'>
            <div>共{Object.keys(this.props.dishes).length}条</div>
            <Table columns={OrderTableColumns}
              dataSource={this.props.dishes}
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
