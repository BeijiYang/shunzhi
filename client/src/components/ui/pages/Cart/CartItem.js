import React, { Component } from 'react'
import { connect } from 'react-redux'
import './cart-item.css'

class CartItem extends Component {
  render(){
    const { name, poster } = this.props.dish
    return(
      <div className="cart-item">
        <div className="cart-item-poster"
             style={{ 'backgroundImage': `url(${poster})`}}
          >
        </div>
        {name}
      </div>
    )
  }
}



export default connect(null)(CartItem)
