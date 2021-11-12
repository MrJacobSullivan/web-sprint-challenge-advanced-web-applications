import { useLocalStorage } from './useLocalStorage'

export const useToken = () => {
  const [token, setToken] = useLocalStorage('token', null)

  const resetToken = setToken(null)

  return { token, setToken, resetToken }
}
