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
  TextInput,
  View,
  Image,
  ScrollView,
  ListView,
  Animated,
  TouchableHighlight,
  DrawerLayoutAndroid,
  ProgressBarAndroid,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view'

class cherishZhihu extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(0),
      entrance: new Animated.Value(0),
    }
  }
  render() {
    return (
      <DrawerLayoutAndroid
        renderNavigationView={() => <Text>React Native</Text>}>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}>
          <Text tabLabel='Tab #1'>My</Text>
          <Text tabLabel='Tab #2 word word'>favorite</Text>
          <Text tabLabel='Tab #3 word word word'>project</Text>
          <Text tabLabel='Tab #4 word word word word'>favorite</Text>
          <Text tabLabel='Tab #5'>project</Text>
        </ScrollableTabView>
      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'red',
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

AppRegistry.registerComponent('cherishZhihu', () => cherishZhihu);
