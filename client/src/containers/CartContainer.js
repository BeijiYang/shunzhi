import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTitle, incrCartItem, decrCartItem } from '../redux/actions'
import Cart from '../components/pages/Cart/Cart'

class CartContainer extends Component {
  componentWillMount () {
    this.props.setTitle('购物车')
  }

  checkout = () => {
    this.props.dispatch({ type: 'SHOW_ALERT', message: "欢迎继续购物" })
    this.props.dispatch({ type: 'CLEAE_CART'})
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
    return(
      <Cart dishes={dishes} total={total}
        onIncrement={this.increment}
        onDecrement={this.decrement}
        />
    )
  }
}

const mapStateToProps = (state) => ({
  dishes: state.cart.dishes,
  total: state.cart.total
})
export default connect(mapStateToProps, { setTitle, incrCartItem, decrCartItem })(CartContainer)
