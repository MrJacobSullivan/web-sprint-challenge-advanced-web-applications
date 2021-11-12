import { useLocalStorage } from './useLocalStorage'

export const useRole = () => {
  const [role, setRole] = useLocalStorage('role', null)

  const resetRole = setRole(null)

  return { role, setRole, resetRole }
}
