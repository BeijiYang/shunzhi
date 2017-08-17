import React, { Component } from 'react'
import '../assets/css/App.css'
import HomeContainer from './HomeContainer'
import DashBoard from '../components/pages/DashBoard/DashBoard'
import SignupContainer from './SignupContainer'
import ProfileContainer from './ProfileContainer'
import LoginContainer from './LoginContainer'
import axios from 'axios'
import Settings from '../settings'
import AlertBox from '../components/shared/AlertBox/AlertBox'
import SidebarContainer from './SidebarContainer'
import Dishes from '../components/pages/Dishes/Dishes'
import DishContainer from './DishContainer'
import Cart from '../components/pages/Cart/Cart'
import CartButton from '../components/shared/CartButton/CartButton'
import UserContainer from './UserContainer'
import store from '../redux/store'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    // LOAD_USERS
    axios.get(`http://localhost:3008/users`).then(
      function (res) {
        store.dispatch({ type: 'LOAD_USERS', users: res.data.users })
      }
    )

    // LOAD_DISHES
    axios.get(`${Settings.host}/dishes`).then(res => {
        store.dispatch({ type: 'LOAD_DISHES', dishes: res.data.dishes })
      }
    )

    // LOAD_COMMENTS
    axios.get(`${Settings.host}/comments`).then(
      res => {
        const { comments } = res.data
        store.dispatch({ type: 'LOAD_COMMENTS', comments })
      }
    )
  }
  render() {
    return (
      <div>
        <AlertBox />
        <Router>
          <div>
            <Route render={({ location }) => {
                return location.pathname !== '/' ?
                       <SidebarContainer /> : null
              }} />
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/signup" component={SignupContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/dashboard" component={DashBoard} />
              <Route path="/profile" component={ProfileContainer} />
              <Route path="/dishes" component={Dishes} />
              <Route path="/cart" component={Cart} />
              <Route path="/dish/:dishId" component={DishContainer} />
              <Route path="/user/:id" component={UserContainer} />
            </Switch>
            <CartButton />
          </div>
        </Router>
      </div>
    );
  }
}


export default App
