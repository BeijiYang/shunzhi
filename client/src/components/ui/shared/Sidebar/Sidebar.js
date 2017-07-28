import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './sidebar.css'
import { connect } from 'react-redux'
import store from '../../../../redux/store'

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

  logout = () => {
    localStorage.removeItem('userId')
    store.dispatch({ type: 'LOG_OUT' })
    this.props.history.push('/')
  }

  render () {
    const { currentUser, isAuthenticated } = this.props.account
    let userInfo = (
      <div className="user-info-text">
        <div className="bm-user-name">
          {currentUser}
        </div>
        <Link to="" onClick={this.logout}>退出</Link>
      </div>
    )
    return (
      <Menu isOpen={this.state.isOpen}
            customCrossIcon={ false }>
            <div className="user-info">
              <img className="bm-img"
                src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
              {isAuthenticated ? userInfo : ''}
            </div>
            <div className="bm-link-list">
              <Link onClick={this.closeMenu} to="/" className="menu-item" >首页</Link>
              <Link onClick={this.closeMenu} to="/profile" className="menu-item" >个人中心</Link>
              <Link onClick={this.closeMenu} to="/cart" className="menu-item" >购物车</Link>
              <Link onClick={this.closeMenu} to="/dishes" className="menu-item" >猜你喜欢</Link>
            </div>
            <div className="bottom-button">
              <button onClick={this.closeMenu} className ="bm-close-button" >关闭</button>
            </div>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  account: state.account
})

export default connect(mapStateToProps)(Sidebar)
