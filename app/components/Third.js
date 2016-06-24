import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

export default class Third extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null
    }
  }

  render () {
    return (
      <View style= { {margin: 10} }>
        <Text>Row: {this.state.id} </Text>
      </View>
    )
  }
}