import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTitle } from '../redux/actions'
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

  render() {
    const { dishes, totalPrice } = this.props
    return(
      <Cart dishes={dishes} totalPrice={totalPrice} />
    )
  }
}

const mapStateToProps = (state) => ({
  dishes: state.cart.dishes,
  totalPrice: state.cart.totalPrice
})
export default connect(mapStateToProps, { setTitle })(CartContainer)
