import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import { withRouter } from 'react-router-dom'

class SidebarContainer extends Component {
  handleLogout = () => {
    this.props.history.push('/')
  }

  handleClick = (e) => {
    this.props.history.push(e.key)
  }

  render() {
    return (
      <Sidebar
        selectedIndex={this.props.history.location.pathname}
        onLogout={this.handleLogout}
        onClickItem={this.handleClick}
      />
    )
  }
}

export default connect(null)(withRouter(SidebarContainer))
