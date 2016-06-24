import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native'
import List from '../components/List'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.initialRoute = {
      name: 'list',
      component: List
    }
  }

  configureScene () {
    return Navigator.SceneConfigs.VerticalDowSwipeJump
  }

  renderScene (route, navigator) {
    let Component = route.component
    return <Component
      {...route.params}
      navigator={navigator}/>
  }

  render () {
    return (
      <Navigator
        initialRoute={this.initialRoute}
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        />
    )
  }

}