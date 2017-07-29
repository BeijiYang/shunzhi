import React, { Component } from 'react'
import './dish-card.css'
import CommentIcon from '../../icons/CommentIcon'
import { Link } from 'react-router-dom'

class DishCard extends Component {
  render() {
    const { dish } = this.props
    return(
      <Link to="/dish" className="dish-card">
        <div style={{ 'backgroundImage' : `url(${dish.poster})` }}
          className="dish-card-poster">
        </div>
        <div className="dish-card-detail">
          <h1 className="dish-name">
            草莓派
          </h1>
          <div className="price-tag">
            24<span className="unit">元</span>
          </div>
          <div className="dish-card-icon-wrap">
            <div className="dish-card-icon-inner">
              <CommentIcon color="#D0D0D0" />
              <span className="dish-comment-no">
                43
              </span>
            </div>
          </div>
          <div className="dish-desc">
            很甜，而且有巧克力和芝士。很甜，而且有巧克力和芝士。很甜，而且有巧克力和芝士。
            <div className="dish-desc-mask">
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default DishCard
