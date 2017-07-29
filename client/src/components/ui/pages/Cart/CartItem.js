import React, { Component } from 'react'
import { connect } from 'react-redux'
import './cart-item.css'

class CartItem extends Component {

  decrement(id){
    console.log(id)
  }

  increment(id) {
    console.log(id);
  }

  render(){
    const { name, poster, price } = this.props.dish
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
          <div onClick={() => this.decrement('id')}
            className="minus">
            -
          </div>
          <div className="item-count">
            2
          </div>
          <div onClick={() => this.increment('id')}
            className="plus">
            +
          </div>
        </div>
      </div>
    )
  }
}



export default connect(null)(CartItem)
