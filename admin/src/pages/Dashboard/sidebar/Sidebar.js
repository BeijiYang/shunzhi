import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

import './sidebar.css'

const SubMenu = Menu.SubMenu

class Sidebar extends Component {
  state = {
    theme: 'light',
  }

  handleLogout = () => {
    this.props.history.push('/')
  }

  handleClick = (e) => {
    this.props.history.push(e.key)
  }

  render() {
    return (
      <div className='sidebar' style={{backgroundColor: '#fff'}}>
        <div className='logo'>
          共享教育
        </div>
        <div className='menus'>
        <Menu
          style={{borderRight: 'none'}}
          theme={this.state.theme}
          onClick={this.handleClick}
          defaultOpenKeys={['school', 'course', 'shop', 'goods']}
          selectedKeys={[this.props.selectedIndex]}
          mode='inline'
        >
          <SubMenu key='accounts' title={<span><Icon type='user' /><span>账号管理</span></span>}>
            <Menu.Item key='/dashboard/accounts/new'>新增账号</Menu.Item>
            <Menu.Item key='/dashboard/accounts/school'>学校账号</Menu.Item>
            <Menu.Item key='/dashboard/accounts/shop'>商家账号</Menu.Item>
          </SubMenu>

          <SubMenu key='school' title={<span><Icon type='file' /><span>学校管理</span></span>}>
            <Menu.Item key='/dashboard'>学校列表</Menu.Item>
            <Menu.Item key='/dashboard/schools/star'>明星学校</Menu.Item>
            <Menu.Item key='/dashboard/schools/hot'>热门学校</Menu.Item>
          </SubMenu>

        </Menu>
        </div>
        <div className='bottom'>
          <div className='logout-btn' onClick={this.handleLogout}>登出</div>
          <div className='email'>{ `admin@admin.com` }</div>
        </div>
      </div>
    )
  }
}

export default connect(null)(withRouter(Sidebar))
