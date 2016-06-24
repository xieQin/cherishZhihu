import * as types from '../actions/types'

let initialState = {}

export default function (state = initialState, action) {
  const { payload, error, type } = action

  switch (type) {
    case types.LOAD_TODOS:
      break;

    case types.SELECT_TODO:
      break;

    case types.ADD_TODO:
      break;

    default:
      return state
  }
}