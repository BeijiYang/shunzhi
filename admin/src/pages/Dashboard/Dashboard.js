import React from 'react'
import Sidebar from './sidebar/Sidebar'
import { Route, Switch } from 'react-router-dom'
import NewDish from './dishes/NewDish'
import Dishes from './dishes/Dishes'
import Orders from './orders/Orders'
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
    <Sidebar selectedIndex={history.location.pathname}/>
    <DashboardMain>
      <TopHeader></TopHeader>
      <MainContent>
        <Switch>
          <Route exact path={`${match.url}/`} component={Dishes} />
          <Route exact path={`${match.url}/dishes`} component={Dishes} />
          <Route exact path={`${match.url}/orders`} component={Orders} />
          <Route exact path={`${match.url}/dishes/new`} component={NewDish} />
          <Route render={ () => <div>对不起，404 了</div> } />
        </Switch>
      </MainContent>
    </DashboardMain>
  </DashboardWrap>
)

export default Dashboard
