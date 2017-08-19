import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import { withRouter } from 'react-router-dom'

class SidebarContainer extends Component {
  state = {
    selectedIndex: this.props.history.location.pathname
  }
  handleLogout = () => {
    this.props.history.push('/')
  }

  handleClick = (e) => {
    this.setState({
      selectedIndex: e.key
    })
    this.props.history.push(e.key)
  }

  render() {
    return (
      <Sidebar
        selectedIndex={this.state.selectedIndex}
        onLogout={this.handleLogout}
        onClickItem={this.handleClick}
      />
    )
  }
}

export default connect(null)(withRouter(SidebarContainer))
