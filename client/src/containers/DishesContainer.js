import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dishes from '../components/pages/Dishes/Dishes'
import { setTitle } from '../redux/actions'

class DishesContainer extends Component {
  componentWillMount () {
    this.props.setTitle('猜你喜欢')
  }

  render(){
    const { dishes } = this.props
    return(
      <Dishes dishes={dishes} />
    )
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dishes
})

export default connect(mapStateToProps, { setTitle })(DishesContainer)
