import React, { Component } from 'react'
import HomeContainer from './containers/HomeContainer'
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
        <Route exact path="/" component={HomeContainer} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    )
  }
}

export default Main
