import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dish.css'

class Dish extends Component {
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
          </div>
        </div>
      </div>
    )
  }
}

export default Dish
