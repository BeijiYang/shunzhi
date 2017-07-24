import React, { Component } from 'react'
import '../css/App.css'
import Home from './ui/pages/Home/Home'
import DashBoard from './ui/pages/DashBoard/DashBoard'
import Signup from './ui/pages/Signup/Signup'
import Profile from './ui/pages/Profile/Profile'
import Login from './ui/pages/Login/Login'
import axios from 'axios'
import Settings from '../settings'
import AlertBox from './ui/shared/AlertBox/AlertBox'
import Sidebar from './ui/shared/Sidebar/Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'


class App extends Component {
  componentDidMount() {
    let userId = localStorage.getItem('userId')
    if(userId) {
      axios.get(`${Settings.host}/user/${userId}`).then(res => {
        this.props.dispatch({ type: 'AUTH_USER', username: res.data.user.username })
      })
    }
  }
  render() {
    const { isAuthenticated } = this.props
    return (
      <div>
        <AlertBox />
        <Router>
          <div>

            <Route render={({ location }) => {
                return location.pathname !== '/' ?
                       <Sidebar /> : null
              }} />
            <Switch>
              <Route exact path="/" render={() => {
                  return isAuthenticated ? (
                    <Redirect to="/dashboard" />
                  ) : (
                    <Home />
                  )
                }}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={DashBoard} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps)(App)
