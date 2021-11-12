import { LOGIN, LOGOUT } from './actions'

export const initialState = { isLoggedIn: false, username: '', role: '' }

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      const { username, role } = action.payload
      return { ...state, isLoggedIn: true, username: username, role: role }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}
