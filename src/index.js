import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './lib/store'

import App from './components/App'

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
