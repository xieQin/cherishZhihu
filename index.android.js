/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, Platform } from 'react'
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
import Home from './app/components/Home'

const DRAWER_REF = 'drawer'

class cherishZhihu extends Component {
  constructor(props: any) {
    super(props)
  }
  _renderNavigationView() {

  }
  onSelect() {
    this.refs[DRAWER_REF].closeDrawer()
  }
  render() {
    let defaultName = 'home'
    let defaultComponent = Home
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={DRAWER_REF}
        renderNavigationView={() =>
          <View>
            <View style={styles.top}>
            </View>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => this.onSelect()}>
                <View style={styles.row}>
                  <Text style={styles.text}>Home</Text>
                  <Icon name='md-arrow-forward' size={25} style={styles.icon}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onSelect()}>
                <View style={styles.row}>
                  <Text style={styles.text}>React Native</Text>
                  <Icon name='md-arrow-forward' size={25} style={styles.icon}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onSelect()}>
                <View style={styles.row}>
                  <Text style={styles.text}>About</Text>
                  <Icon name='md-arrow-forward' size={25} style={styles.icon}/>
                </View>
              </TouchableOpacity>
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
          onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
          titleColor="white">
        </Icon.ToolbarAndroid>
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.FloatFromRight
          }}
          renderScene={(route, navigator) => {
            let Component = route.component
            return <Component {...route.params} navigator={navigator}/>
          }}
        />
      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    height: 150,
    backgroundColor: '#3385ff'
  },
  toolbar: {
    height: 56,
    justifyContent: 'center',
    backgroundColor: '#3385ff'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  row: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    borderBottomColor: '#efefef',
    borderBottomWidth: 1
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#3385ff',
    marginLeft: 10,
    alignSelf: 'center',
  },
  icon: {
    width: 40,
    height: 50,
    marginTop: 12,
    marginLeft: 20,
    color: '#ccc',
  }
})

AppRegistry.registerComponent('cherishZhihu', () => cherishZhihu);
