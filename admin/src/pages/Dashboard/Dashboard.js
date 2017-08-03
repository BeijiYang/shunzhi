import React from 'react'
import Sidebar from './sidebar/Sidebar'
import { Route, Switch } from 'react-router-dom'
import './dashboard.css'


import Dishes from './dishes/Dishes'
import HotDishes from './dishes/HotDishes'

import Orders from './orders/Orders'
import Order from './orders/Order'

const Dashboard = ({match, history}) => (
  <div className='dashboard'>
    <Sidebar selectedIndex={history.location.pathname}/>
    <div className='main'>
      <div className='top-header'></div>
      <div className='content'>
        <Switch>
          <Route exact path={`${match.url}/dishes`} component={Dishes} />
          <Route path={`${match.url}/dishes/hot`} component={HotDishes} />

          <Route exact path={`${match.url}/orders`} component={Orders} />
          <Route path={`${match.url}/orders/:orderId`} component={Order} />
        </Switch>
      </div>
    </div>
  </div>
)

export default Dashboard
