// <Route path="/profile" component={ProfileContainer} />
// <Route path="/dishes" component={Dishes} />
// <Route path="/cart" component={Cart} />
// <Route path="/dish/:dishId" component={DishContainer} />
// <Route path="/user/:id" component={UserContainer} />
import LoginContainer from './LoginContainer'
import DashboardContainer from './DashboardContainer'
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
          <Route title="登录" path="/login" component={LoginContainer} />
          <Route title="注册" path="/signup" component={SignupContainer} />
          <Route title="更新" path="/dashboard" component={DashboardContainer} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.account.title
})

export default connect(mapStateToProps)(LayoutContainer)
