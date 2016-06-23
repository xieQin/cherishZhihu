import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import Second from './Second'
import GiftedListView from 'react-native-gifted-listview'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 2
    }
    this._press = this._press.bind(this)
  }

  _press () {
    const { navigator } = this.props
    if(navigator) {
      navigator.push({
        name:'second',
        component: Second,
        params: {
          id: this.state.id
        }
      })
    }
  }

  _renderRowView (rowData) {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={this._press}>
        <Text>{rowData}111</Text>
      </TouchableHighlight>
    )
  }

  _onFetch (page = 1, callback, options) {
    setTimeout(() => {
      var rows = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)]
      if (page === 3) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        })
      } else {
        callback(rows);
      }
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true}
          pagination={true}
          refreshable={true}
          withSections={false}
          customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}
          refreshableTintColor='blue'>
        </GiftedListView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  navBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  item: {
    backgroundColor: '#FFF',
  },
  row: {
    padding: 10,
    height: 44,
  }
})

export default Home