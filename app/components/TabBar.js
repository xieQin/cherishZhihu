import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  Animated
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const DRAWER_REF = 'drawer'

class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <Icon.ToolbarAndroid
        style={styles.toolbar}
        title='Home'
        navIconName="md-arrow-back"
        overflowIconName="md-more"
        actions={[
          {title: '夜间模式', show: 'never'},
          {title: '设置选项', show: 'never'},
        ]}
        onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
        titleColor="white">
      </Icon.ToolbarAndroid>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    justifyContent: 'center',
    backgroundColor: '#3385ff'
  }
})

export default TabBar