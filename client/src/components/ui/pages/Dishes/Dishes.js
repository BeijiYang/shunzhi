import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './dishes.css'
import DishCard from './DishCard'

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
        <div className="dish-header">
          猜你喜欢
        </div>
        <Slider {...settings}>
          <div><DishCard /></div>
          <div><DishCard /></div>
          <div><DishCard /></div>
          <div><DishCard /></div>
        </Slider>
      </div>
    )
  }
}

export default Dishes
