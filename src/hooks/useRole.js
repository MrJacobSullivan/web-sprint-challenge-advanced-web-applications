import { useLocalStorage } from './useLocalStorage'

export const useRole = () => {
  const [role, setRole] = useLocalStorage('role', null)

  return { role, setRole }
}
