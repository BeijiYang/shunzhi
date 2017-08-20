import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dishes from '../components/pages/Dishes/Dishes'
import { setTitle } from '../redux/actions'
import StyledSpinner from '../components/StyledSpinner'

class DishesContainer extends Component {
  componentWillMount () {
    this.props.setTitle('猜你喜欢')
  }

  render(){
    const { dishes, isFetching } = this.props
    if (isFetching) {
      return <StyledSpinner />
    }
    return(
      <Dishes dishes={dishes} />
    )
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.byId,
  isFetching: state.dish.isFetching
})

export default connect(mapStateToProps, { setTitle })(DishesContainer)
