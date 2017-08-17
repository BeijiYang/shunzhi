// <Route path="/signup" component={SignupContainer} />
// <Route path="/dashboard" component={DashboardContainer} />
// <Route path="/profile" component={ProfileContainer} />
// <Route path="/dishes" component={Dishes} />
// <Route path="/cart" component={Cart} />
// <Route path="/dish/:dishId" component={DishContainer} />
// <Route path="/user/:id" component={UserContainer} />
import LoginContainer from './LoginContainer'
import Layout from '../components/shared/Layout/Layout'
import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'


class LayoutContainer extends Component {
  render(){
    return(
      <Layout>
        <Route title="LoginContainer" path="/login" component={LoginContainer} />
      </Layout>
    )
  }
}

export default LayoutContainer
