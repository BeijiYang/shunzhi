import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { getAllDishes } from './redux/actions'

store.dispatch(getAllDishes())

ReactDOM.render(<App />, document.getElementById('root'))
