/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  DrawerLayoutAndroid,
  ProgressBarAndroid
} from 'react-native';

class cherishZhihu extends Component {
  constructor(props) {
    super(props)
    this.state = { position: 'unknown' }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({position}),
      (error) => console.log(error)
    )
  }
  render() {
    return (
      <DrawerLayoutAndroid
        renderNavigationView={() => <Text>React Native</Text>}>
        <ProgressBarAndroid/>
        <ScrollView style={styles.container}>
          <TouchableHighlight
            onPress={() => console.log('pressed')}
            style={styles.item}>
            <Text style={styles.text}>Position: {JSON.stringify(this.state.position)}</Text>
          </TouchableHighlight>
          <Text style={styles.item}>Position: {JSON.stringify(this.state.position)}</Text>
          <View style={styles.row}>
            <Image
              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                React Native
              </Text>
              <Text style={styles.subtitle}>
                Build high quality mobile apps using React
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                React Native
              </Text>
              <Text style={styles.subtitle}>
                Build high quality mobile apps using React
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                React Native
              </Text>
              <Text style={styles.subtitle}>
                Build high quality mobile apps using React
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                React Native
              </Text>
              <Text style={styles.subtitle}>
                Build high quality mobile apps using React
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                React Native
              </Text>
              <Text style={styles.subtitle}>
                Build high quality mobile apps using React
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.row}>
          <Image
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
            style={styles.image}
          />
          <View style={styles.text}>
            <Text style={styles.title}>
              React Native
            </Text>
            <Text style={styles.subtitle}>
              Build high quality mobile apps using React
            </Text>
          </View>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  item: {
    height: 40,
    lineHeight: 40,
    marginLeft: 40,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    margin: 40
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  text: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 10
  }
})

AppRegistry.registerComponent('cherishZhihu', () => cherishZhihu);
