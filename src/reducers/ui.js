import constants from '../constants'

const uiReducer = (state, action) => {
  switch (action.type) {
    case constants.PAUSE:
      return Object.assign({}, state, {state: constants.paused})
    case constants.RESUME:
      return Object.assign({}, state, {state: constants.active})
    case constants.FOCUS:
      console.log(action)
      return Object.assign({}, state, {focus: action.unit})
    default:
      return state
  }
}

export default uiReducer
