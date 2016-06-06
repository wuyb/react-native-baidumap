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
  View
} from 'react-native';
import BaiduMap from 'react-native-baidumap';

class BaiduMapDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
	<BaiduMap style={{flex: 1, width: 300}}
	  showsUserLocation={true}
          userLocationViewParams={{accuracyCircleFillColor: 'red', image: require('./start_icon.png')}}
          annotations={[{latitude: 39.832136, longitude: 116.34095, title: "start", subtile: "hello", image: require('./stop_icon.png')}, {latitude: 39.902136, longitude: 116.44095, title: "end", subtile: "hello", image: require('./stop_icon.png')}]}
          overlays={[{coordinates: [{latitude: 39.832136, longitude: 116.34095}, {latitude: 39.832136, longitude: 116.42095}, {latitude: 39.902136, longitude: 116.42095}, {latitude: 39.902136, longitude: 116.44095}], strokeColor: '#666666', lineWidth: 3}]}
	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BaiduMapDemo', () => BaiduMapDemo);
