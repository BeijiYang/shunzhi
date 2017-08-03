import React, { Component } from 'react'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Settings from './settings.js'
import axios from 'axios'

import {
  Switch,
  Route
} from 'react-router-dom'

class Main extends Component {

  componentWillMount() {

    // LOAD_DISHES
    axios.get(`${Settings.host}/dishes`).then(res => {
      console.log('Main', res.data.dishes)
    })
  }
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
