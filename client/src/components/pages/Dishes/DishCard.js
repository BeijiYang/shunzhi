import React, { Component } from 'react'
import './dish-card.css'
import CommentIcon from '../../../assets/icons/CommentIcon'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Settings from '../../../settings'

class DishCard extends Component {
  render() {
    const { dish } = this.props
    return(
      <Link to={`/dish/${this.props.dishId}`} className="dish-card">
        <div style={{ 'backgroundImage' : `url(${Settings.host}/uploads/posters/${dish.poster})` }}
          className="dish-card-poster">
        </div>
        <div className="dish-card-detail">
          <h1 className="dish-name">
            {dish.name}
          </h1>
          <div className="price-tag">
            {dish.price}<span className="unit">元</span>
          </div>
          <div className="dish-card-icon-wrap">
            <div className="dish-card-icon-inner">
              <CommentIcon color="#D0D0D0" />
              <span className="dish-comment-no">
                {this.props.comments.filter(item => item.dish._id === this.props.dishId).length}
              </span>
            </div>
          </div>
          <div className="dish-desc">
            {dish.desc + dish.desc + dish.desc + dish.desc}
            <div className="dish-desc-mask">
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.all
})

export default connect(mapStateToProps)(DishCard)
