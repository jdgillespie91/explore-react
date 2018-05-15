import constants from '../../constants'

const timeReducer = (state, action) => {
  switch (action.type) {
    case constants.TICK:
      return state + 1
    default:
      return state
  }
}

export default timeReducer
