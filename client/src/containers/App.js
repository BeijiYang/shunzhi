import React, { Component } from 'react'
import '../assets/css/App.css'
import HomeContainer from './HomeContainer'
import axios from 'axios'
import Settings from '../settings'
import AlertBox from '../components/shared/AlertBox/AlertBox'
import SidebarContainer from './SidebarContainer'
import CartButtonContainer from './CartButtonContainer'
import LayoutContainer from './LayoutContainer'
import store from '../redux/store'
import * as types from '../redux/ActionTypes'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    // LOAD_USERS
    axios.get(`http://localhost:3008/users`).then(
      function (res) {
        store.dispatch({ type: 'LOAD_USERS', users: res.data.users })
      }
    )

    axios.get(`${Settings.host}/comments`).then(
      res => {
        const { comments } = res.data
        store.dispatch({ type: types.RECEIVE_COMMENTS , comments })
      }
    )
  }
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
