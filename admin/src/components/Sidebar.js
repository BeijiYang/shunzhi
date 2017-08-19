import React from 'react'
import { Menu, Icon } from 'antd'
import styled from 'styled-components'
const SubMenu = Menu.SubMenu

const SidebarWrap = styled.div`
  background: #fff;
  color: #212121;
  width: 200px;
  z-index: 4;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const LogoWrap = styled.div`
  height: 64px;
  line-height: 64px;
  padding-left: 24px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #ececec;
  flex-shrink: 0;
`

const Menus = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`

const Bottom = styled.div`
  background-color: #ececec;
  box-sizing: border-box;
  color: #212121;
  font-size: .9rem;
  height: 56px;
  line-height: 56px;
  flex-shrink: 0;
  > div {
    display: inline-block;
  }
`

const LogoutButton = styled.div`
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  width: 60px;
  line-height: 56px;
  background-color: #ff8a00;
`

const Email = styled.div`
  font-size: 1rem;
  padding-left: 8px;
`

const Sidebar = ({ onClickItem, selectedIndex, onLogout }) => (
  <SidebarWrap>
    <LogoWrap>
      吮指后台
    </LogoWrap>
    <Menus>
      <Menu
        style={{borderRight: 'none'}}
        theme="light"
        onClick={(e) => onClickItem(e)}
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
    </Menus>
    <Bottom>
      <LogoutButton onClick={onLogout}>登出</LogoutButton>
      <Email>{ `admin@admin.com` }</Email>
    </Bottom>
  </SidebarWrap>
)


export default Sidebar
