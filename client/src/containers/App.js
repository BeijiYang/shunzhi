import React, { Component } from 'react'
import '../assets/css/App.css'
import HomeContainer from './HomeContainer'
import AlertBox from '../components/shared/AlertBox/AlertBox'
import SidebarContainer from './SidebarContainer'
import CartButtonContainer from './CartButtonContainer'
import LayoutContainer from './LayoutContainer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <AlertBox />
        <Router>
          <div>
            <Route render={({ location }) => {
                return location.pathname !== '/' ?
                       <SidebarContainer /> : null
              }} />
            <Switch>
              <Route exact path="/" render={() => {
                  if(localStorage.getItem('userId')) {
                    return <Redirect to="/dashboard" />
                  } else {
                    return <HomeContainer />
                  }
                }} />
              <Route component={LayoutContainer} />
            </Switch>
            <CartButtonContainer />
          </div>
        </Router>
      </div>
    );
  }
}


export default App
