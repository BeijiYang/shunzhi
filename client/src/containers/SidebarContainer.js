import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/shared/Sidebar/Sidebar'

import {
  withRouter
} from 'react-router-dom'

class SidebarContainer extends Component {

  logout = () => {
    localStorage.removeItem('userId')
    this.props.dispatch({ type: 'LOG_OUT' })
    this.props.history.push('/')
  }

  render () {
    const { currentUser } = this.props
    return (
      <Sidebar
        onLogout={this.logout}
        currentUser={currentUser} />
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.account.currentUser
})

export default connect(mapStateToProps)(withRouter(SidebarContainer))
