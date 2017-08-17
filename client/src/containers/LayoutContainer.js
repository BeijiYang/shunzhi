// <Route path="/user/:id" component={UserContainer} />
import DishesContainer from './DishesContainer'
import DishContainer from './DishContainer'
import LoginContainer from './LoginContainer'
import DashboardContainer from './DashboardContainer'
import ProfileContainer from './ProfileContainer'
import CartContainer from './CartContainer'
import SignupContainer from './SignupContainer'
import TitleHeader from '../components/shared/TitleHeader/TitleHeader'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Switch,
  Route
} from 'react-router-dom'


class LayoutContainer extends Component {
  render(){
    return(
      <div>
        <TitleHeader title={this.props.title} />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/dish/:dishId" component={DishContainer} />
          <Route path="/dishes" component={DishesContainer} />
          <Route path="/cart" component={CartContainer} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.account.title
})

export default connect(mapStateToProps)(LayoutContainer)
