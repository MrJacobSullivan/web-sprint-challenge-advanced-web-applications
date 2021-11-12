import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useAuthContext } from '../hooks/useAuthContext'

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  const { isLoggedIn } = useAuthContext()

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) return <Component {...props} />
        return <Redirect to="/login" />
      }}
    />
  )
}

export default PrivateRoute
