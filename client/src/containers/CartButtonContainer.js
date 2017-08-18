import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartButton from '../components/shared/CartButton/CartButton'

class CartButtonContainer extends Component {

  render() {
    const { cartCount } = this.props
    return(
      <CartButton
      show={cartCount !== 0}
      cartCount={cartCount} />
    )
  }
}

const mapStateToProps = (state) => ({
  cartCount: state.cart.addedIds.length
})

export default connect(mapStateToProps)(CartButtonContainer)
