/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
        styleURL={Mapbox.StyleURL.Street}
        zoomLevel={15}
        style={styles.map}
        showUserLocation={true}
        userTrackingMode={Mapbox.UserTrackingModes.Follow}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  }
});
