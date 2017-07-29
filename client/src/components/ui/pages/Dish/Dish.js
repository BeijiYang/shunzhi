import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dish.css'
import ShoppingIcon from './ShoppingIcon'
import CommentIcon from '../../icons/CommentIcon'
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
    this.props.dispatch({ type: 'ADD_CART', dishID: this.props.match.params.dishId })
  }

  render(){
    console.log('in Dish...', this.props.dishes, this.props.match.params.dishId)
    let dishId = this.props.match.params
    let dish = this.props.dishes[dishId]
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
              {dish.name}
            </h1>
            <div className="price-tag">
              {dish.price}<span className="unit">元</span>
            </div>
            <div onClick={this.buy}
              className="shopping-icon-wrap">
              <ShoppingIcon color={this.state.buy ? '#F77062' : '#D0D0D0'}/>
            </div>
            <p className="dish-desc">
              {dish.desc}
            </p>
            <div className="dish-comment-icon-wrap">
              <CommentIcon color="#D0D0D0" />
              <span className="dish-comment-no">
                43
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all
})

export default connect(mapStateToProps)(Dish)
