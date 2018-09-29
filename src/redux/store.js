import { createStore } from 'redux'

function reducers(state, action) {
    console.log(action);
    if (typeof state === 'undefined') {
      return initialState
    }
  ​
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
  }

export const store = createStore(reducers);