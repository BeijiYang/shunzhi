import React, { Component } from 'react'
import HomeContainer from './containers/HomeContainer'
import DashboardContainer from './containers/DashboardContainer'

import {
  Switch,
  Route
} from 'react-router-dom'

class Main extends Component {

  render(){
    return(
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
      </Switch>
    )
  }
}

export default Main
