import React, { Component } from 'react'
import './dish.css'
import ShoppingIcon from './ShoppingIcon'
import Comment from './Comment'
import PieChart from './PieChart'
import AreaChart from './AreaChart'
import { posterUrl } from '../../../settings'


class Dish extends Component {

  render(){
    const { dish, comments, isInCart } = this.props
    return (
      <div className="dish">
        <div className="dish-info">
          <div className="dish-img-wrap">
            <div style={{ 'backgroundImage' : `url(${posterUrl(dish.poster)}`}}
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
            <div onClick={() => this.props.onBuy(dish._id)}
              className="shopping-icon-wrap">
              <ShoppingIcon color={isInCart ? '#F77062' : '#D0D0D0'}/>
            </div>
            <p className="dish-desc">
              {dish.desc}
            </p>
            <h1 className="dish-sub-title">营养成分</h1>
            <p className="dish-sub-detail">点击各部分查看详情</p>
            <PieChart />
            <h1 className="dish-sub-title">销售额</h1>
            <p className="dish-sub-detail">单位：份</p>
            <AreaChart />
            <h1 className="dish-sub-title">评论区</h1>
            <p className="dish-sub-detail">
              评论数：
              { Object.keys(comments).filter(id => comments[id].dish._id === dish._id).length }
              {/*使用 https://github.com/paularmstrong/normalizr ? */}
            </p>
            <Comment dishId={dish._id} isAuthenticated={this.props.isAuthenticated}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dish
