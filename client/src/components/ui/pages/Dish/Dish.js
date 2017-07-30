import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dish.css'
import ShoppingIcon from './ShoppingIcon'
import CommentIcon from '../../icons/CommentIcon'
import Comment from './Comment'
import { connect } from 'react-redux'
import axios from 'axios'
import Settings from '../../../../settings'

class Dish extends Component {

  componentWillMount() {
    axios.get(`${Settings.host}/comments`).then(
      res => {
        const { comments } = res.data
        this.props.dispatch({ type: 'LOAD_COMMENTS', comments })
      }
    )
  }

  state = {
    buy: false
  }

  buy = (dish) => {
    this.setState({
      buy: true
    })
    this.props.dispatch({ type: 'ADD_CART', dishId: this.props.match.params.dishId, dish: dish })
  }

  render(){
    if(Object.keys(this.props.dishes).length !== 0){
      let dish = this.props.dishes[this.props.match.params.dishId]
      return (
        <div className="dish">
          <TitleHeader title="草莓派" />
          <div className="dish-info">
            <div className="dish-img-wrap">
              <div style={{ 'backgroundImage' : `url(${dish.poster})`}}
                className="img">
              </div>
            </div>
            <div className="dish-info-card">
              <h1 className="dish-name">
                {dish.name}
              </h1>
              <div className="price-tag">
                {dish.price}<span className="unit">元</span>
              </div>
              <div onClick={() => this.buy(dish)}
                className="shopping-icon-wrap">
                <ShoppingIcon color={this.state.buy ? '#F77062' : '#D0D0D0'}/>
              </div>
              <p className="dish-desc">
                {dish.desc}
              </p>
              <div className="dish-comment-icon-wrap">
                <CommentIcon color="#D0D0D0" />
                <span className="dish-comment-no">
                  { Object.keys(this.props.comments).length }
                </span>
              </div>
              <Comment />
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all,
  comments: state.comment.all
})

export default connect(mapStateToProps)(Dish)
