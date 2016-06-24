import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  StyleSheet
} from 'react-native'

const fullWidth = Dimensions.get('window').width
const REQUEST_URL = 'http://news-at.zhihu.com/api/4/start-image/1080*1776'

export default class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cover: null,
      bounceValue: new Animated.Value(1)
    }
  }

  componentDidMount () {
    this.state.bounceValue.setValue(1)
    Animated.timing(
      this.state.bounceValue,
      {
        toValue: 1.2,
        duration: 5000,
      }
    ).start()
  }

  render () {
    let img = {uri: 'https://pic4.zhimg.com/70444c83a9bd41c226e01508e7aeb36d.jpg'}
    let text = 'Hello World'

    return(
      <View style={styles.container}>
        <Animated.Image
          source={img}
          style={{
            flex: 1,
            width: fullWidth,
            height: 1,
            transform: [
              {scale: this.state.bounceValue},
            ]
          }} />
        <Text style={styles.text}>
            {text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  cover: {
    flex: 1,
    width: 200,
    height: 1,
  },
  logo: {
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    height: 54,
    backgroundColor: 'transparent',
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    backgroundColor: 'transparent',
  }
})