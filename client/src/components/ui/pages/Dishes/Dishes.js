import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './dishes.css'
import DishCard from './DishCard'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'

class Dishes extends Component {
  render(){
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
    return(
      <div className="dishes">
        <TitleHeader title="猜你喜欢" />
        <Slider {...settings}>
          <div className="dish-card-wrap"><DishCard /></div>
          <div className="dish-card-wrap"><DishCard /></div>
          <div className="dish-card-wrap"><DishCard /></div>
          <div className="dish-card-wrap"><DishCard /></div>
        </Slider>
      </div>
    )
  }
}

export default Dishes
