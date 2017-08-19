import React from 'react'
import SidebarContainer from '../containers/SidebarContainer'
import { Route, Switch } from 'react-router-dom'
import NewDishContainer from '../containers/NewDishContainer'
import DishesContainer from '../containers/DishesContainer'
import Orders from './Orders'
import styled from 'styled-components'

const TopHeader = styled.div`
  height: 64px;
  background-color: #404040;
  color: #fff;
  width: 100%;
  padding-left: 72px;
  line-height: 64px;
  flex-shrink: 0;
  position: fixed;
  z-index: 999;
`

const DashboardWrap = styled.div`
  display: flex;
`

const DashboardMain = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
`

const MainContent = styled.div`
  margin: 88px 24px 24px;
  flex-grow: 1;
`

const Dashboard = ({match, history}) => (
  <DashboardWrap>
    <SidebarContainer />
    <DashboardMain>
      <TopHeader></TopHeader>
      <MainContent>
        <Switch>
          <Route exact path={`${match.url}/dishes`} component={DishesContainer} />
          <Route path={`${match.url}/orders`} component={Orders} />
          <Route path={`${match.url}/dishes/new`} component={NewDishContainer} />
          <Route render={ () => <div>对不起，404 了</div> } />
        </Switch>
      </MainContent>
    </DashboardMain>
  </DashboardWrap>
)

export default Dashboard
