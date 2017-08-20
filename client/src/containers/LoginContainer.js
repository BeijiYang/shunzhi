import React, { Component } from 'react'
import Login from '../components/pages/Login/Login'
import { connect } from 'react-redux'
import { setTitle, showAlert, updateUser, login } from '../redux/actions'
import StyledSpinner from '../components/StyledSpinner'

class LoginContainer extends Component {
  state = {
    referrer: ''
  }

  componentWillMount () {
    this.props.setTitle('登录')
    if (this.props.location.state) {
      const { from } = this.props.location.state
      this.setState({
        referrer: from.pathname
      })
    }
  }

  login = (data) => {
    this.props.login(data, this.state.referrer, this.props.history)
  }

  render() {
    const { isFetching } = this.props
    return(
      <div>
        <Login onFormSubmit={this.login} />
        {isFetching && <StyledSpinner />}
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.account.isFetching
})

export default connect(mapStateToProps, {
  setTitle,
  showAlert,
  updateUser,
  login })(LoginContainer)
