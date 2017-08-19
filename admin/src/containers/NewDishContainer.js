import React, { Component } from 'react'
import NewDish from '../components/NewDish'
import  Settings  from '../settings'
import { submitDish } from '../redux/actions'
import { connect } from 'react-redux'

class NewDishContainer extends Component {
  handleSubmitDish = (data, message) => {
    let { history } = this.props
    this.props.submitDish(data, message, history)
  }

  uploadAction = {
    action: `${Settings.host}/dish/poster`,
    name: 'poster'
  }


  render = () => {
    return (
      <NewDish onSubmitDish={this.handleSubmitDish}
        uploadAction={this.uploadAction}
      />
  )}
}

export default connect(null, { submitDish })(NewDishContainer)
