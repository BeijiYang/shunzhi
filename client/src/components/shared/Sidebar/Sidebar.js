import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Settings, { avatarUrl } from '../../../settings'
import './sidebar.css'

import {
  Link
} from 'react-router-dom'

class Sidebar extends Component {

  state = {
    isOpen: false
  }

  closeMenu = () =>{
    this.setState({
      isOpen: false
    })
  }

  render () {
    const { currentUser, isAuthenticated } = this.props
    let userInfo = (
      <div onClick={this.closeMenu} className="user-info-text">
        <Link to="/profile" className="bm-user-name">
          {currentUser.username}
        </Link>
        <Link to="" onClick={this.props.onLogout}>退出</Link>
      </div>
    )

    let profileLink =(
      <Link onClick={this.closeMenu} to="/profile" className="menu-item" >个人中心</Link>
    )

    let loginLink =(
      <Link onClick={this.closeMenu} to="/login" className="menu-item" >登录</Link>
    )

    let avatar = currentUser.avatar ? avatarUrl(currentUser.avatar) : Settings.defaultAvatar

    return (
      <Menu isOpen={this.state.isOpen}
            customCrossIcon={ false }>
            <div className="user-info">
              <div className="bm-img"
                   style={{ 'background-image': `url(${avatar})`}}
                >
              </div>
              {isAuthenticated && userInfo}
            </div>
            <div className="bm-link-list">
              <Link onClick={this.closeMenu} to="/" className="menu-item" >首页</Link>
              {isAuthenticated ? profileLink : loginLink}
              <Link onClick={this.closeMenu} to="/dishes" className="menu-item" >猜你喜欢</Link>
            </div>
            <div className="bottom-button">
              <button onClick={this.closeMenu} className ="bm-close-button" >关闭</button>
            </div>
      </Menu>
    )
  }
}

export default Sidebar
