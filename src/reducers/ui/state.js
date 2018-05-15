import constants from '../../constants'

const stateReducer = (state, action) => {
  switch (action.type) {
    case constants.PAUSE:
      return constants.paused
    case constants.RESUME:
      return constants.active
    default:
      return state
  }
}

export default stateReducer
