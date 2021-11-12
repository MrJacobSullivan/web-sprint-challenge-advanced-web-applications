import React, { useReducer, createContext } from 'react'

import { reducer, initialState } from '../lib/reducer'
import { actions } from '../lib/actions'

import { useRole } from '../hooks/useRole'
import { useToken } from '../hooks/useToken'
import { useUsername } from '../hooks/useUsername'

export const AuthContext = createContext(null)

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { setRole, resetRole } = useRole()
  const { setToken, resetToken } = useToken()
  const { setUsername, resetUsername } = useUsername()

  const login = (auth) => {
    const { token, role, username } = auth
    setRole(role)
    setToken(token)
    setUsername(username)

    dispatch(actions.login({ username, role }))
  }

  const logout = () => {
    resetRole()
    resetToken()
    resetUsername()

    dispatch(actions.logout())
  }

  return <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
