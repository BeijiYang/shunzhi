import React, { Component } from 'react'
import './cart-item.css'

class CartItem extends Component {

  render(){
    const { name, poster, price, _id} = this.props.dish
    return(
      <div className="cart-item">
        <div className="cart-item-info">
          <div className="cart-item-poster"
               style={{ 'backgroundImage': `url(${poster})`}}
            >
          </div>
          <div className="name-price-wrap">
            <div className="cart-item-name">
              {name}
            </div>
            <div className="cart-item-price">
              {price}
            </div>
          </div>
        </div>
        <div className="cart-action">
          <div onClick={() => this.props.onDecrement(_id)}
            className="minus">
            -
          </div>
          <div className="item-count">
            {this.props.dish.quantity}
          </div>
          <div onClick={() => this.props.onIncrement(_id)}
            className="plus">
            +
          </div>
        </div>
      </div>
    )
  }
}


export default CartItem
