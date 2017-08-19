import React, { Component } from 'react'
import NewDish from '../components/NewDish'
import  Settings  from '../settings'
import axios from 'axios'
import { submitDish } from '../redux/actions'
import { connect } from 'react-redux'



class NewDishContainer extends Component {
  submitDish = (data, message) => {
    this.props.submitDish(data, message)
  }

  uploadAction = {
    action: `${Settings.host}/dish/poster`,
    name: 'poster'
  }


  render = () => {
    return (
      <NewDish onSubmitDish={this.submitDish}
        uploadAction={this.uploadAction}
      />
  )}
}

export default connect(null, { submitDish })(NewDishContainer)
