import React, { Component } from 'react'
import cartIcon from './cartIcon.svg'
import './cart-button.css'
import {
  Link
} from 'react-router-dom'

class CartButton extends Component {
  render() {
    return(
      <Link to="/cart" style={{ 'display': `${this.props.show ? 'block' : 'none' }`}}
      className="cart-button">
        <div className="cart-no">
          {this.props.cartCount}
        </div>
        <img src={cartIcon} alt="icon" />
    </Link>
    )
  }
}

export default CartButton
