import React, { Component } from 'react'
import Dish from '../components/pages/Dish/Dish'
import { connect } from 'react-redux'
import { setTitle, addToCart } from '../redux/actions'

class DishContainer extends Component {

  componentWillReceiveProps () {
    this.props.setTitle('新品')
  }

  buy = (dish, isInCart) => {
    if(isInCart) return
    this.props.addToCart(dish)
  }

  render(){
    if(Object.keys(this.props.dishes).length !== 0){
      let { dishId } = this.props.match.params
      let dish = this.props.dishes[dishId]
      let isInCart =  Object.keys(this.props.cartDishes).includes(dishId)
      let { comments } = this.props
      let userId = localStorage.getItem('userId')
      let isAuthenticated =  userId !== 'null' && userId !== 'undefined'
      return (
        <Dish dish={dish} comments={comments}
          isInCart={isInCart} isAuthenticated={isAuthenticated}
          onBuy={this.buy}
          />
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all,
  comments: state.comment.all,
  cartDishes: state.cart.dishes,
})

export default connect(mapStateToProps, { setTitle, addToCart })(DishContainer)
