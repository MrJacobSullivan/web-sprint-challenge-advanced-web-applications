import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import Header from './Header'
import LambdaHeader from './LambdaHeader'
import View from './View'
import Login from './Login'
import Logout from './Logout'

import PrivateRoute from './PrivateRoute'

const App = () => {
  return (
    <AppContainer>
      <LambdaHeader />
      <Header />
      <RouteContainer>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route path="/login" component={Login} />
        <PrivateRoute path="/logout" component={Logout} />
        <PrivateRoute path="/view" component={View} />
      </RouteContainer>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
