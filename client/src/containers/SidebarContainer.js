import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/shared/Sidebar/Sidebar'

import {
  withRouter
} from 'react-router-dom'

class SidebarContainer extends Component {

// 参考：https://auth0.com/blog/secure-your-react-and-redux-app-with-jwt-authentication/
// 这部分的显示逻辑是这样：
// 首先根据 isFetching 判断是要显示主体内容（其中包含 isAuthenticated 和 currentUser）还是显示 LOADING
// 等到主体内容显示的时候，isAuthenticated 已经赋值完毕了，这时候即可放心使用了。
  logout = () => {
    localStorage.removeItem('userId')
    this.props.dispatch({ type: 'LOG_OUT' })
    this.props.history.push('/')
  }

  render () {
    const { isAuthenticated, currentUser, isFetching } = this.props
    if (!isFetching) {
      return (
        <Sidebar
          onLogout={this.logout}
          currentUser={currentUser}
          isAuthenticated={isAuthenticated}
          />
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.account.currentUser,
  isAuthenticated: state.account.isAuthenticated,
  isFetching: state.account.isFetching
})

export default connect(mapStateToProps)(withRouter(SidebarContainer))
