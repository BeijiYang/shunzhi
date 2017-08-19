import React, { Component } from 'react'
import Home from '../components/Home'

class HomeContainer extends Component {
  login = (data) => {
    console.log('axios.post %s', data)
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <Home onLogin={this.login} />
    )
  }
}

export default HomeContainer
