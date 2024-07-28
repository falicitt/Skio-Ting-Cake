import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain={'dev-327766o4.au.auth0.com'}
      clientId={'StKsy7HlfX4xXSZLea8QjuAMtCfcpE0K'}
      redirectUri={window.location.origin}
      audience="https://skio-ting-cake/api"
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
