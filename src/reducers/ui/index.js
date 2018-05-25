import focusReducer from './focus'
import stateReducer from './state'
import timeReducer from './time'
import snakeTimeReducer from './snakeTime'

const uiReducer = (state, action) =>
  Object.assign(
    {},
    {state: stateReducer(state.state, action)},
    {focus: focusReducer(state.focus, action)},
    {time: timeReducer(state.time, action)},
    {snakeTime: snakeTimeReducer(state.snakeTime, action)}
  )

export default uiReducer
