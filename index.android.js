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
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('cherishZhihu', () => cherishZhihu);
