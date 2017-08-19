import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import { withRouter } from 'react-router-dom'

class Sidebar extends Component {
  handleLogout = () => {
    this.props.history.push('/')
  }

  handleClick = (e) => {
    console.log('handleClick', e)
    this.props.history.push(e.key)
  }

  render() {
    return (
      <Sidebar onLogout={this.handleLogout}
        onClickItem={this.handleClick}
      />
    )
  }
}

export default connect(null)(withRouter(Sidebar))
