import React, { Component } from 'react'
import cartIcon from './cartIcon.svg'
import {
  Link
} from 'react-router-dom'

class CartButton extends Component {
  styles = {
    button: {
      'backgroundColor': 'white',
      'borderRadius': '50%',
      'boxShadow': '0 2px 4px 0 rgba(0,0,0,0.50)',
      'width': '50px',
      'height': '50px',
      'padding': '15px',
      'position': 'fixed',
      'bottom': '20px',
      'right': '10px'
    },
    img: {
      'width': '20px',
      'height': '20px'
    },
    cartNo: {
      'position': 'absolute',
      'top': '0',
      'right': '0',
      'width': '17px',
      'height': '17px',
      'borderRadius': '50%',
      'background': '#212121',
      'textAlign': 'center',
      'lineHeight': '17px',
      'color': 'white'
    }

  }
  render() {
    return(
      <Link to="/cart" style={this.styles.button}
      className="cart-button">
        <div style={this.styles.cartNo}
          className="cart-no">
          0
        </div>
        <img style={this.styles.img}
        src={cartIcon} alt="icon" />
    </Link>
    )
  }
}

export default CartButton
