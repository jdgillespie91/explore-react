import focusReducer from './focus'
import stateReducer from './state'
import timeReducer from './time'

const uiReducer = (state, action) =>
  Object.assign(
    {},
    {state: stateReducer(state.state, action)},
    {focus: focusReducer(state.focus, action)},
    {time: timeReducer(state.time, action)}
  )

export default uiReducer
