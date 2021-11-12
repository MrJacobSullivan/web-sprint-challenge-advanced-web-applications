import { useLocalStorage } from './useLocalStorage'

export const useUsername = () => {
  const [username, setUsername] = useLocalStorage('username', null)

  return { username, setUsername }
}
