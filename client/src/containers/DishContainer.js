import React, { Component } from 'react'
import Dish from '../components/pages/Dish/Dish'
import { connect } from 'react-redux'
import { setTitle, addToCart } from '../redux/actions'
import StyledSpinner from '../components/StyledSpinner'


class DishContainer extends Component {

  componentWillMount () {
    this.props.setTitle('新品')
  }

  buy = (dishId) => {
    this.props.addToCart(dishId)
  }

  render(){
    let { dishId } = this.props.match.params
    let { dishes, isFetching } = this.props
    if(!isFetching){
      let isInCart =  this.props.cart.addedIds.includes(dishId)
      let { comments } = this.props
      let userId = localStorage.getItem('userId')
      let isAuthenticated =  userId !== 'null' && userId !== 'undefined'
      return (
        <Dish dish={dishes[dishId]} comments={comments}
          isInCart={isInCart} isAuthenticated={isAuthenticated}
          onBuy={this.buy}
          />
      )
    } else {
      return <StyledSpinner />
    }
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.dish.isFetching,
  dishes: state.dish.byId,
  comments: state.comment.byId,
  cart: state.cart
})

export default connect(mapStateToProps, { setTitle, addToCart })(DishContainer)
