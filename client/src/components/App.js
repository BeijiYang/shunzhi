import React, { Component } from 'react'
import '../css/App.css'
import Home from './ui/Home'
import Signup from './ui/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App
