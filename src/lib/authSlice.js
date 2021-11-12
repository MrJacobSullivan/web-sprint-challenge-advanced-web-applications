import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('auth/login', async ({ username, password }, thunkAPI) => {
  try {
    const { data } = await axios.post('http://localhost:5000/api/login', { username, password })

    localStorage.setItem('token', data.token)
    localStorage.setItem('username', data.username)
    localStorage.setItem('role', data.role)

    return data
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    username: '',
    role: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    resetState: (state) => {
      return {
        ...state,
        isFetching: false,
        isSuccess: false,
        isError: false,
      }
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isAuthenticated: true,
        usename: payload.username,
        role: payload.role,
        isFetching: false,
        isSuccess: true,
        isError: false,
        error: '',
      }
    },
    [login.rejected]: (state, { payload }) => {
      return {
        ...state,
        isAuthenticated: false,
        usename: '',
        role: '',
        isFetching: false,
        isSuccess: false,
        isError: true,
        error: payload,
      }
    },
    [login.pending]: (state) => {
      return { ...state, isFetching: true }
    },
  },
})

export const { resetState } = authSlice.actions
export const authSelector = (state) => state.auth
