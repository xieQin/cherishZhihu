import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import TodoList from './layouts/TodoList'

const store = configureStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
  }
}