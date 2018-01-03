/**
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

const accessToken = 'pk.eyJ1IjoiYWxleHpoYW5na2FpIiwiYSI6ImNqYXZ2YXYydzBnNngzN28xdGxwaTVmMjIifQ.1EW2HIBwydotIGlYxdft5w';
Mapbox.setAccessToken(accessToken);

export default class App extends Component<{}> {
    constructor(){
        super();
        this.mapPressed = this.mapPressed.bind(this);
        this.convertCoor = this.convertCoor.bind(this);
    }

    handleMapPressed(): void{
        this.map.getVisibleBounds().then((data) => this.convertCoor(data));
    }

    convertCoor(bounds){
        const boundOne = [bounds[0][1], bounds[0][0]];
        const boundTwo = [bounds[1][1], bounds[1][0]];
        this.map.getPointInView(boundOne).then((result) => console.log(result));
        this.map.getPointInView(boundTwo).then((result) => console.log(result));
    }

    render(){
        return (
            <View style={styles.container}>
                <Mapbox.MapView
                    styleURL={Mapbox.StyleURL.Street}
                    zoomLevel={15}
                    style={styles.map}
                    showUserLocation={true}
                    userTrackingMode={Mapbox.UserTrackingModes.Follow}
                    ref={(c) => this._map = c}
                    id={'map'}
                    onPress={this.handleMapPressed}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    }
});
