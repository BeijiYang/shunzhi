import DishesContainer from './DishesContainer'
import DishContainer from './DishContainer'
import LoginContainer from './LoginContainer'
import DashboardContainer from './DashboardContainer'
import ProfileContainer from './ProfileContainer'
import UserContainer from './UserContainer'
import CartContainer from './CartContainer'
import SignupContainer from './SignupContainer'
import TitleHeader from '../components/shared/TitleHeader/TitleHeader'
import StyledSpinner from '../components/StyledSpinner'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'


// 这里用到了 isAuthenticated ，所以也要务必保证先在 login 的 isFetching 变成 false 之后，再执行这里的代码
const PrivateRoute = ({component: Component, isAuthenticated, ...rest }) => (
  <Route { ...rest } render={(props) => {
      if (isAuthenticated) {
        return <Component />
      } else {
        return <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
      }
    }} />
)

class LayoutContainer extends Component {
  render(){
    const { isAuthenticated, isFetching } = this.props
    if (isFetching) {
      return <StyledSpinner />
    }
    return(
      <div>
        <TitleHeader title={this.props.title} />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
          <Route path="/dashboard" component={DashboardContainer} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="/profile" component={ProfileContainer} />
          <Route path="/dish/:dishId" component={DishContainer} />
          <Route path="/dishes" component={DishesContainer} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="/cart" component={CartContainer} />
          <Route path="/user/:id" component={UserContainer} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.account.isAuthenticated,
  title: state.account.title,
  isFetching: state.account.isFetching
})

export default connect(mapStateToProps)(LayoutContainer)
