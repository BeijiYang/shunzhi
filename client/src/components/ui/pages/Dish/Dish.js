import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dish.css'
import ShoppingIcon from './ShoppingIcon'
import { connect } from 'react-redux'

class Dish extends Component {

  state = {
    buy: false
  }

  buy = () => {
    console.log('buy...')
    this.setState({
      buy: true
    })
    this.props.dispatch({ type: 'ADD_CART', dishID: 'xxx'})
  }

  render(){
    return(
      <div className="dish">
        <TitleHeader title="草莓派" />
        <div className="dish-info">
          <div className="dish-img-wrap">
            <div className="img">
            </div>
          </div>
          <div className="dish-info-card">
            <h1 className="dish-name">
              草莓派
            </h1>
            <div className="price-tag">
              24<span className="unit">元</span>
            </div>
            <div onClick={this.buy}
              className="shopping-icon-wrap">
              <ShoppingIcon color={this.state.buy ? '#F77062' : '#D0D0D0'}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null)(Dish)
