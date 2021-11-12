export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const actions = {
  login: (auth) => ({ type: LOGIN, payload: auth }),
  logout: () => ({ type: LOGOUT }),
}
