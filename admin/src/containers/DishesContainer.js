import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dishes from '../components/Dishes'

class DishesContainer extends Component {

  render() {
    const { dishes } = this.props
    if(Object.keys(dishes).length !== 0) {
      const dishArr = Object.keys(dishes).map(id => (
        {
          _id: id,
          price: dishes[id].price,
          desc: dishes[id].desc,
          poster: dishes[id].poster
        }
      ))
      return (
        <Dishes dishes={dishArr.slice().reverse()}/>
      )
    }else{
      return <div>Loading</div>
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all
})

export default connect(mapStateToProps)(DishesContainer)
