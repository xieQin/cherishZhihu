/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Platform } from 'react';
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
  ToolbarAndroid,
  LayoutAnimation,
  Navigator
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar
} from 'react-native-scrollable-tab-view'
import TabBar from './app/components/TabBar'

class cherishZhihu extends Component {
  constructor(props: any) {
    super(props)
  }
  _renderNavigationView() {

  }
  render() {
    return (
      <DrawerLayoutAndroid
        renderNavigationView={() =>
          <View style={styles.text}>
            <View style={styles.row}>
              <Text>Home</Text>
            </View>
            <View style={styles.row}>
              <Text>React Native</Text>
            </View>
            <View style={styles.row}>
              <Text>About</Text>
            </View>
          </View>
        }>
        <Icon.ToolbarAndroid
          style={styles.toolbar}
          title='Home'
          navIconName="md-arrow-back"
          overflowIconName="md-more"
          actions={[
            {title: 'Settings', iconName: 'md-settings', iconSize: 30, show: 'always'},
            {title: '夜间模式', show: 'never'},
            {title: '设置选项', show: 'never'},
          ]}
          titleColor="white">
        </Icon.ToolbarAndroid>
      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    justifyContent: 'center',
    backgroundColor: '#3385ff'
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#3385ff'
  }
})

AppRegistry.registerComponent('cherishZhihu', () => cherishZhihu);
