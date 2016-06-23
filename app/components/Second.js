import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

class Second extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _press () {
    const { navigator } = this.props
    if(navigator) {
      navigator.pop()
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={this._press.bind(this)}>
          <Text style={styles.text}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange'
  },
  item: {
    flexDirection: 'column',
    // backgroundColor: 'blue',
  },
  text: {
    height: 30,
    fontSize: 20,
    color: 'red',
    backgroundColor: '#fff'
  }
})

export default Second