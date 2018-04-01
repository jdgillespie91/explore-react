import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers'

const initialState = {
  ui: {
    state: 'active'
  }
}
const store = createStore(rootReducer, initialState)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))