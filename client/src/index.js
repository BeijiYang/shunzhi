import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './redux/store'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

let Kid = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(Kid, document.getElementById('root'))
