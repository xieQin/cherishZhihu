import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'

var middlewares = [
  thunkMiddleware
]

export default function configureStore(initialState) {
  return applyMiddleware(
    ...middlewares
  )(createStore)(reducers, initialState)
}