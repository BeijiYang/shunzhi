import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { loadCurrentUser, loadDishes, loadComments } from './redux/actions'


let Kid = (
  <Provider store={store}>
    <App />
  </Provider>
)

const userId = localStorage.getItem('userId')
if (userId && userId !== 'undefined') {
  store.dispatch(loadCurrentUser(userId))
}
store.dispatch(loadDishes())
store.dispatch(loadComments())

ReactDOM.render(Kid, document.getElementById('root'))
