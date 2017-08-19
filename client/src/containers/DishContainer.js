import React, { Component } from 'react'
import Dish from '../components/pages/Dish/Dish'
import { connect } from 'react-redux'
import { setTitle, addToCart } from '../redux/actions'

class DishContainer extends Component {

  componentWillMount () {
    this.props.setTitle('新品')
  }

  buy = (dishId) => {
    this.props.addToCart(dishId)
  }

  render(){
    if(Object.keys(this.props.dishes).length !== 0){
      let { dishId } = this.props.match.params
      let dish = this.props.dishes[dishId]
      let isInCart =  this.props.cart.addedIds.includes(dishId)
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
  dishes: state.dishes,
  comments: state.comment.byId,
  cart: state.cart
})

export default connect(mapStateToProps, { setTitle, addToCart })(DishContainer)
