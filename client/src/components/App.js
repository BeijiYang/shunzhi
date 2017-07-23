import React, { Component } from 'react'
import '../css/App.css'
import Home from './ui/pages/Home/Home'
import DashBoard from './ui/pages/DashBoard/DashBoard'
import Signup from './ui/pages/Signup/Signup'
import axios from 'axios'
import Settings from '../settings'
import store from '../redux/store'
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
        store.dispatch({ type: 'AUTH_USER', username: res.data.user.username })
      })
    }
  }
  render() {
    const { isAuthenticated } = this.props
    console.log('....', isAuthenticated)
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => {
                return isAuthenticated ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Home />
                )
              }}/>
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps)(App)
