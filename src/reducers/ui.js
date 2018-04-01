const uiReducer = (state, action) => {
  switch (action.type) {
    case 'PAUSE':
      return Object.assign({}, state, {state: 'paused'})
    case 'RESUME':
      return Object.assign({}, state, {state: 'active'})
    default:
      return state
  }
}

export default uiReducer
