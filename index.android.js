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
  ProgressBarAndroid
} from 'react-native';

class cherishZhihu extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(0),
    }
  }
  render() {
    return (
      <Animated.Image                         // Base: Image, Text, View
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [                        // `transform` is an ordered array
            {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
          ]
        }}
      />
    )
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5)      // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.8,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start()                                 // Start the animation
  }
}

// class cherishZhihu extends Component {
//   constructor(props) {
//     super(props)
//     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
//     this.state = {
//       position: 'unknown',
//       dataSource: ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie'])
//     }
//   }
//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => this.setState({position}),
//       (error) => console.log(error)
//     )
//   }
//   render() {
//     return (
//       <DrawerLayoutAndroid
//         renderNavigationView={() => <Text>React Native</Text>}>
//         <ProgressBarAndroid/>
//         <ScrollView style={styles.container}>
//           <TouchableHighlight
//             style={styles.item}
//             onPress={() => console.log('pressed')}>
//             <Text>Position: {JSON.stringify(this.state.position)}</Text>
//           </TouchableHighlight>
//           <TextInput style={styles.item} placeholder='Hello~'/>
//         </ScrollView>
//         <View style={styles.container}>
//           <ListView
//             dataSource={this.state.dataSource}
//             renderRow={(rowData) =>
//               <TouchableHighlight
//                 style={styles.item}
//                 onPress={() => console.log('listView pressed')}>
//                 <Text>{rowData}</Text>
//               </TouchableHighlight>
//             }
//           />
//         </View>
//         <View style={styles.row}>
//           <Image
//             source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
//             style={styles.image}
//           />
//           <View style={styles.text}>
//             <Text style={styles.title}>
//               React Native
//             </Text>
//             <Text style={styles.subtitle}>
//               Build high quality mobile apps using React
//             </Text>
//           </View>
//         </View>
//       </DrawerLayoutAndroid>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  item: {
    height: 40,
    lineHeight: 40,
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'left'
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
