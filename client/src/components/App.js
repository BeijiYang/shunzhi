import React, { Component } from 'react'
import '../css/App.css'
import Home from './ui/Home'
import Signup from './ui/Signup'
import Sidebar from './ui/Sidebar'
import axios from 'axios'
import Settings from '../settings'
import store from '../redux/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

const DashBoard = () => <h1>DashBoard</h1>

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
    console.log(this.props.isAuthenticated, '....')
    let pathname = '/'
    return (
      <div>
        {pathname !== "/" ? <Sidebar /> : ''}
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
