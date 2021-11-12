import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logout } from '../lib/authSlice'

const Logout = () => {
  const dispatch = useDispatch()

  const { push } = useHistory()

  useEffect(() => {
    dispatch(logout())
    push('/login')
  }, [])

  return null
}

export default Logout
