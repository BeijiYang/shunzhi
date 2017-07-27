import React, { Component } from 'react'
import cartIcon from './cartIcon.svg'

class CartButton extends Component {
  styles = {
    button: {
      'backgroundColor': 'white',
      'borderRadius': '50%',
      'boxShadow': '0 2px 4px 0 rgba(0,0,0,0.50)',
      'width': '50px',
      'height': '50px',
      'padding': '12px',
      'position': 'fixed',
      'bottom': '20px',
      'right': '10px'
    },
    img: {
      'width': '26px',
      'height': '26px'
    }

  }
  render() {
    return(
      <div style={this.styles.button}
      className="cart-button">
        <img src={cartIcon} alt="icon" />
      </div>
    )
  }
}

export default CartButton
