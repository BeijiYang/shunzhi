import React, { Component } from 'react'
import { connect } from 'react-redux'

class CartItem extends Component {
  render(){
    const { name } = this.props.dish
    return(
      <div className="cart-item">
        {name}
      </div>
    )
  }
}



export default connect(null)(CartItem)
