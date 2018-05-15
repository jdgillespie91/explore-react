import constants from '../../constants'

const focusReducer = (state, action) => {
  switch (action.type) {
    case constants.FOCUS:
      return action.unit
    default:
      return state
  }
}

export default focusReducer
