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
    focus: constants.empty,
    time: 0,
    snakeTime: 0
  },
  snake: {
    direction: constants.east,
    position: [
      {x: 3, y: 0},
      {x: 2, y: 0},
      {x: 1, y: 0},
      {x: 0, y: 0}
    ]
  }
}
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
