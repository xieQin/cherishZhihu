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
  LayoutAnimation
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
  render() {
    return (
      <DrawerLayoutAndroid
        renderNavigationView={() =>
          <View style={styles.text}>
          <Text>React Native Demo</Text>
          </View>
        }>
        <ScrollableTabView
          style={{marginTop: 20, }}
          initialPage={1}
          renderTabBar={() => <TabBar />}>
          <ScrollView tabLabel="ios-paper" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-people" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Messenger</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Notifications</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-list" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Other nav</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  text: {
    lineHeight: 30,
    height: 30,
    textAlign: 'center'
  }
})

AppRegistry.registerComponent('cherishZhihu', () => cherishZhihu);
