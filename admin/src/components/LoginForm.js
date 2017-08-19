import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item

const StyledButton = styled(Button)`
  width: 100%;
`

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const email = this.state.email
    const password = this.state.password
    this.props.onLogin({ email, password})
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          <Input prefix={<Icon type="mail" style={{ fontSize: 14 }} />} placeholder="email" value={this.state.email} onChange={this.handleEmailChange} />
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type="lock" style={{ fontSize: 14 }} />} type="password" onChange={this.handlePasswordChange}
          placeholder="Password" value={this.state.password} />
        </FormItem>
        <FormItem>
          <StyledButton type="primary" htmlType="submit" >登录</StyledButton>
        </FormItem>
      </Form>
    );
  }
}

export default LoginForm
