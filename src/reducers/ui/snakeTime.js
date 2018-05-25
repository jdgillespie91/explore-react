import constants from '../../constants'

const snakeTimeReducer = (state, action) => {
  switch (action.type) {
    case constants.SNAKE_TICK:
      return state + 1
    default:
      return state
  }
}

export default snakeTimeReducer
