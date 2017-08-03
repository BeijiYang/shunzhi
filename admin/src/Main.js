import Home from './pages/Home/Home'
import React, { Component } from 'react'

import {
  Switch,
  Route
} from 'react-router-dom'

class Main extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
}

export default Main
