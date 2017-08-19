import React, { Component } from 'react'
import LoginForm from './LoginForm'
import styled from 'styled-components'

const HomeWrap = styled.div`
  padding: 100px 15px;
  height: 100vh;
`

const Content = styled.div`
  background-color: #fff;
  padding: 50px;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  border: 1px solid #ddd;
`

const Home = ({ onLogin }) => (
  <HomeWrap>
   <Content>
     <LoginForm onLogin={onLogin}/>
   </Content>
  </HomeWrap>
)

export default Home
