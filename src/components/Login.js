import React, { useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'

import { useHistory } from 'react-router-dom'

const initialValues = { username: '', password: '' }

const Login = () => {
  const { push } = useHistory()

  const [values, setValue] = useState(initialValues)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValue({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:5000/api/login', values)
      .then(({ data }) => {
        localStorage.setItem('token', data.token)

        push('/view')
      })
      .catch(({ message }) => setErrorMessage(message))
  }

  return (
    <ComponentContainer>
      <ModalContainer>
        <h1>Welcome to Blogger Pro</h1>
        <h2>Please enter your account information.</h2>

        <FormGroup onSubmit={handleSubmit}>
          <Label>
            Username
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="required"
              value={values.username}
              onChange={handleChange}
            />
          </Label>

          <Label>
            Password
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="required"
              value={values.password}
              onChange={handleChange}
            />
          </Label>

          <Error id="error">{errorMessage}</Error>

          <Button id="submit">Submit</Button>
        </FormGroup>
      </ModalContainer>
    </ComponentContainer>
  )
}

export default Login

const ComponentContainer = styled.div`
  height: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
`

const ModalContainer = styled.div`
  width: 500px;
  background: white;
  padding: 2rem;
  text-align: center;
`

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1.5rem;
`

const FormGroup = styled.form`
  padding: 1rem;
`

const Input = styled.input`
  font-size: 1rem;
  padding: 1rem 0;
  width: 100%;
`

const Button = styled.button`
  padding: 1rem;
  width: 100%;
`

const Error = styled.p`
  color: red;
`
