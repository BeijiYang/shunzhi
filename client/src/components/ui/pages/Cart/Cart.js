import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
  render() {
    console.log(this, this.props.cart)
    return(
      <div className="cart">
        cart
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
})
export default connect(mapStateToProps)(Cart)
