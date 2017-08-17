// <Route path="/signup" component={SignupContainer} />
// <Route path="/login" component={LoginContainer} />
// <Route path="/dashboard" component={DashboardContainer} />
// <Route path="/profile" component={ProfileContainer} />
// <Route path="/dishes" component={Dishes} />
// <Route path="/cart" component={Cart} />
// <Route path="/dish/:dishId" component={DishContainer} />
// <Route path="/user/:id" component={UserContainer} />

import Layout from '../components/shared/Layout'
import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

const MyKid = ({ title }) => (
  <div className="title">
  {title}
  </div>
)

class LayoutContainer extends Component {
  render(){
    return(
      <Layout>
        <MyKid  title="helo" />
      </Layout>
    )
  }
}

export default LayoutContainer
