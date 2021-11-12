import { useLocalStorage } from './useLocalStorage'

export const useUsername = () => {
  const [username, setUsername] = useLocalStorage('username', null)

  const resetUsername = setUsername(null)

  return { username, setUsername, resetUsername }
}
