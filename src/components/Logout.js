import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import axiosWithAuth from '../utils/axiosWithAuth'

const Logout = () => {
  const { push } = useHistory()

  useEffect(() => {
    axiosWithAuth()
      .post('/logout')
      .then(() => {
        localStorage.removeItem('token')

        push('/login')
      })
      .catch(({ message }) => console.log(message))
  }, [])

  return <div />
}

export default Logout
