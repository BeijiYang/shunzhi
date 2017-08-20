import React, { Component } from 'react'
import Login from '../components/pages/Login/Login'
import { connect } from 'react-redux'
import { setTitle, showAlert, updateUser, login } from '../redux/actions'

class LoginContainer extends Component {
  state = {
    referrer: ''
  }

  componentWillMount () {
    this.props.setTitle('登录')
    if (this.props.location.state) {
      const { from } = this.props.location.state
      console.log('xxxxx--set referrer', from.pathname)

      this.setState({
        // referrer: from.pathname
        referrer: '/cart'
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
        <Login onFormSubmit={this.login} isFetching={isFetching} />
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
