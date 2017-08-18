import React, { Component } from 'react'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import { connect } from 'react-redux'
import store from './redux/store'

import {
  Switch,
  Route
} from 'react-router-dom'

class Main extends Component {

  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    )
  }
}

export default Main
