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
  render() {
    return (
      <DrawerLayoutAndroid
        renderNavigationView={() => <Text>React Native</Text>}>
        <ProgressBarAndroid/>
        <ScrollView>
          <TouchableHighlight onPress={() => console.log('pressed')}>
            <Text>Proper Touch Handling</Text>
          </TouchableHighlight>
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
