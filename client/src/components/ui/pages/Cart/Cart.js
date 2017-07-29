import React, { Component } from 'react'
import { connect } from 'react-redux'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import CartItem from './CartItem'
import './cart.css'

class Cart extends Component {
  render() {
    const { dishes, cart } = this.props
    console.log('---', dishes)
    console.log('++++', cart.dishes)

    if(Object.keys(this.props.dishes).length !== 0 && this.props.cart.dishes.length !== 0) {
      let itemList = this.props.cart.dishes.map(item => {
        return (
          <CartItem key={item} dish={dishes[item]} />
        )
      })
      return(
        <div className="cart">
          <TitleHeader title="购物车" />
          <div className="cart-hero">
            <h1 className="total-price">
              {this.props.cart.totalPrice} 元
            </h1>
          </div>
          <div className="cart-item-list">
            {itemList}
          </div>
        </div>
      )
    }else {
      return (
        <div>
          购物车是空的
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  dishes: state.dish.all
})
export default connect(mapStateToProps)(Cart)
