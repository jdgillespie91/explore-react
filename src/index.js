import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './components/App'
import constants from './constants'
import './index.css'
import rootReducer from './reducers'

const initialState = {
  ui: {
    state: constants.active,
    focus: constants.empty
  }
}
const store = createStore(rootReducer, initialState)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
