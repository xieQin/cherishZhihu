import * as types from './types'
import { createAction } from 'react-actions'

export const loadTodos = createAction(types.LOAD_TODOS)

export const addTodo = createAction(types.ADD_TODO, (text) => {
  return {
    todo: text
  }
})

export const selectTodo = createAction(types.SELECT_TODO, (id) => {
  return {
    id: id
  }
})