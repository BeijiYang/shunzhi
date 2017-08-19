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
    const { dishes } = this.props
    let slideStr = Object.keys(dishes).map(id => (
      <div key={id} className="dish-card-wrap"><DishCard dish={dishes[id]} dishId={id} /></div>
    ))

    let slide = (
      <Slider {...settings}>
        { slideStr}
      </Slider>
    )
    return(
      <div className="dishes">
        { Object.keys(this.props.dishes).length === 0 ? '' : slide }
      </div>
    )
  }
}


export default Dishes
