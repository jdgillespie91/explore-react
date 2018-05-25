import constants from '../../constants'

const snakeReducer = (state, action) => {
  switch (action.type) {
    case constants.SNAKE_TICK:
      const increments = {}
      increments[constants.north] = {x: 0, y: 1}
      increments[constants.south] = {x: 0, y: -1}
      increments[constants.east] = {x: 1, y: 0}
      increments[constants.west] = {x: -1, y: 0}
      const increment = increments[state.direction]

      const position = state.position.slice()
      position.pop()
      return Object.assign(
        {},
        state, {
          position: [
            {x: position[0].x + increment.x, y: position[0].y + increment.y},
            ...position
          ]
        }
      )
    case constants.KEYPRESS:
      const compass = {
        w: constants.north,
        s: constants.south,
        d: constants.east,
        a: constants.west
      }
      return Object.assign({}, state, {direction: compass[action.key]})
    default:
      return state
  }
}

export default snakeReducer
