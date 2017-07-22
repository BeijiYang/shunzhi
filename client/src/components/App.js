import React, { Component } from 'react'
import '../css/App.css'
import Home from './ui/Home'
import Signup from './ui/Signup'
import Sidebar from './ui/Sidebar'
import { Provider } from 'react-redux'
import store from '../redux/store'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App
