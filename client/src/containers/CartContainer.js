import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setTitle,
  incrCartItem,
  decrCartItem,
  showAlert,
  checkout
} from '../redux/actions'
import { getCartDishes, getTotal } from '../redux/reducers'
import Cart from '../components/pages/Cart/Cart'

class CartContainer extends Component {
  componentWillMount () {
    this.props.setTitle('购物车')
  }

  checkout = () => {
    this.props.showAlert('欢迎继续购物')
    this.props.checkout()
    this.props.history.push('/dashboard')
  }

  increment = (dishId) => {
    this.props.incrCartItem(dishId)
  }

  decrement = (dishId) => {
    this.props.decrCartItem(dishId)
  }

  render() {
    const { dishes, total } = this.props
    if (dishes) {
      return(
        <Cart dishes={dishes} total={total}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onCheckout={this.checkout}
          />
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return ({
    dishes: getCartDishes(state),
    total: getTotal(state)
  })
}

export default connect(mapStateToProps,
      { setTitle, incrCartItem,
        decrCartItem, showAlert,
        checkout
       })(CartContainer)
