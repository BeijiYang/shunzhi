import React, { Component } from 'react'
import Home from '../components/pages/Home/Home'

class HomeContainer extends Component {
  componentWillMount () {
    if (localStorage.getItem('userId') !== 'undefined') {
      this.props.history.push('/dashboard')
    }
  }
  render() {
    return(
      <Home />
    )
  }
}



export default HomeContainer
