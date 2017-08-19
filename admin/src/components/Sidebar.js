import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import './sidebar.css'
const SubMenu = Menu.SubMenu

const Sidebar = ({ onClickItem, selectedIndex, onLogout }) => (
  <div className='sidebar' style={{backgroundColor: '#fff'}}>
    <div className='logo'>
      吮指后台
    </div>
    <div className='menus'>
    <Menu
      style={{borderRight: 'none'}}
      theme="light"
      onClick={() => onClickItem()}
      defaultOpenKeys={['school', 'course', 'shop', 'goods']}
      selectedKeys={[selectedIndex]}
      mode='inline'
    >
      <SubMenu key='orders' title={<span><Icon type='file' /><span>订单管理</span></span>}>
        <Menu.Item key='/dashboard/orders'>待发货</Menu.Item>
        <Menu.Item key='/dashboard/orders/completed'>已完成</Menu.Item>
      </SubMenu>

      <SubMenu key='dishes' title={<span><Icon type='file' /><span>甜点管理</span></span>}>
        <Menu.Item key='/dashboard/dishes'>所有甜点</Menu.Item>
        <Menu.Item key='/dashboard/dishes/new'>新建甜点</Menu.Item>
      </SubMenu>
    </Menu>
    </div>
    <div className='bottom'>
      <div className='logout-btn' onClick={onLogout}>登出</div>
      <div className='email'>{ `admin@admin.com` }</div>
    </div>
  </div>
)

export default Sidebar
