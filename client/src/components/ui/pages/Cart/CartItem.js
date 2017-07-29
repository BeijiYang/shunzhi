import React, { Component } from 'react'
import { connect } from 'react-redux'
import './cart-item.css'

class CartItem extends Component {

  state = {
    itemCount: 1

  }

  decrement = () => {
    console.log(this.props.dishId)
    let itemCount = this.state.itemCount - 1
    this.setState({
      itemCount
    })
  }

  increment = () => {
    console.log(this.props.dishId)
    let itemCount = this.state.itemCount + 1
    this.setState({
      itemCount
    })
    this.props.dispatch({ type: 'INCR_CART_ITEM', dishId: this.porps.dishId })
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
          <div onClick={this.decrement}
            className="minus">
            -
          </div>
          <div className="item-count">
            {this.state.itemCount}
          </div>
          <div onClick={this.increment}
            className="plus">
            +
          </div>
        </div>
      </div>
    )
  }
}



export default connect(null)(CartItem)
