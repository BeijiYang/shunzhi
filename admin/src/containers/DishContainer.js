import React, { Component } from 'react'
import Dish from '../components/Dish'
import { connect } from 'react-redux'
import Loading from '../components/Loading'


class DishContainer extends Component {
  render(){
    const { id } = this.props.match.params
    const { isFetching, dishes } = this.props
    if (isFetching) {
      return <Loading />
    }
    return(
      <Dish dish={dishes[id]}/>
    )
  }
}

const mapStateToPorps = (state) => ({
  dishes: state.dish.all,
  isFetching: state.app.isFetching
})

export default connect(mapStateToPorps)(DishContainer)
