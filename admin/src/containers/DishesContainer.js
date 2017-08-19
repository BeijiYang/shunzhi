import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dishes from '../components/Dishes'
import Loading from '../components/Loading'
import { deleteDish } from '../redux/actions'

class DishesContainer extends Component {

  handleDelete = (id, message) => {
    console.log(id)
    this.props.deleteDish(id, message)
  }

  render() {
    const { dishes, isFetching } = this.props
    if (isFetching) return <Loading />

    const dishArr = Object.keys(dishes).map(id => (
      {
        _id: id,
        price: dishes[id].price,
        desc: dishes[id].desc,
        poster: dishes[id].poster
      }
    ))
    return (
      <Dishes dishes={dishArr.slice().reverse()}
        onDelete={this.handleDelete}
        />
    )
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all,
  isFetching: state.app.isFetching
})

export default connect(mapStateToProps, { deleteDish })(DishesContainer)
