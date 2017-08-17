import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dishes from '../components/pages/Dishes/Dishes'
import { setTitle } from '../redux/actions'

class DishesContainer extends Component {
  componentWillMount () {
    this.props.setTitle('菜品分类')
  }

  render(){
    console.log('dishes', this.props.dishes)
    const { dishes } = this.props
    console.log('xxxxxx', dishes)
    return(
      <Dishes dishes={dishes} />
    )
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all
})

export default connect(mapStateToProps, { setTitle })(DishesContainer)
