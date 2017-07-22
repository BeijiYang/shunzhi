import React, { Component } from 'react'
import '../css/App.css'
import Home from './ui/Home'
import Signup from './ui/Signup'
import Sidebar from './ui/Sidebar'
import axios from 'axios'
import Settings from '../settings'
import store from '../redux/store'
import {
  Switch,
  Route
} from 'react-router-dom'

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
    return (
      <div>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App
