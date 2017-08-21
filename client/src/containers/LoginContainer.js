import React, { Component } from 'react'
import Login from '../components/pages/Login/Login'
import { connect } from 'react-redux'
import { setTitle, showAlert, login } from '../redux/actions'
import StyledSpinner from '../components/StyledSpinner'


class LoginContainer extends Component {
  state = {
    referrer: ''
  }

  componentWillMount () {
    this.props.setTitle('登录')
    if (this.props.location.state) {
      const { from } = this.props.location.state
      this.props.showAlert('请先登录')
      this.props.location.state = null
      // 如果这里不清空 state ，那么 showAlert 会执行两次
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
    if (isFetching) {
      return <StyledSpinner />
    }
    return(
      <div>
        <Login onFormSubmit={this.login} />
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
  login })(LoginContainer)
