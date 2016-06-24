import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking
} from 'react-native'

class Second extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null
    }
  }

  componentDidMount () {
    this.setState({
      id: this.props.id
    })
  }

  _press () {
    const { navigator } = this.props
    if(navigator) {
      navigator.pop()
    }
  }
  _callTel () {
    return Linking.openURL('tel:10086')
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={this._press.bind(this)}>
          <Text style={styles.text}>Go to Home: {this.state.id}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={this._callTel.bind(this)}>
          <Text style={styles.text}>Call 10086</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'column',
  },
  text: {
    margin: 10,
    height: 30,
    fontSize: 16
  }
})

export default Second