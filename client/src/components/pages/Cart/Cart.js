import React, { Component } from 'react'
import CartItem from './CartItem'
import './cart.css'

class Cart extends Component {

  render() {
    const { dishes, total } = this.props
    let itemList = Object.keys(dishes).map(id => {
      return (
        <CartItem key={id} dish={dishes[id]}
          onDecrement={this.props.onDecrement}
          onIncrement={this.props.onIncrement}
          />
      )
    })
    return(
      <div style={{ 'height': `${window.innerHeight -80}px` }}
        className="cart">
        <div className="cart-hero">
          <h1 className="total-price">
            {total} 元
          </h1>
        </div>
        <div className="cart-list-wrap">
          <div className="cart-item-list">
            {itemList}
          </div>
          <div onClick={this.checkout}
            className="cart-checkout-button">
            结算
          </div>
        </div>
      </div>
    )
  }
}


export default Cart
