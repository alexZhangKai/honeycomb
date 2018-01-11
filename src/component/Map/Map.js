// @flow

import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {
    Icon
} from 'react-native-elements';

import Mapbox from '@mapbox/react-native-mapbox-gl';

import { accessToken } from '../../config/settings';
import {
    styles,
    mapboxStyles
} from './styles';
import type {
    Props,
    State
} from './types';
import sampleRoute from '../../data/sampleRoute';

Mapbox.setAccessToken(accessToken);

export default class Map extends Component<Props, State> {
    constructor(){
        super();
        this.state = { usrLoc: [0, 0] };
    }

    componentDidMount(){
        navigator.geolocation.requestAuthorization();
        this.watchID = navigator.geolocation.watchPosition(
            (location) => this.locationUpdate(location),
            (error) => console.error(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
        );
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID);
    }

    locationUpdate(location: Object){
        this.setState({ usrLoc: [location.coords.longitude, location.coords.latitude] });
        this._route.props.shape.geometry.coordinates[0] = this.state.usrLoc;
    }

    // Change view to current user location
    handleFlyTo = () => {
        this._map.flyTo(this.state.usrLoc);
    }

    render(){
        return (
            <Mapbox.MapView
                styleURL={Mapbox.StyleURL.Street}
                zoomLevel={15}
                style={styles.map}
                showUserLocation={true}
                pitchEnable={false}
                rotateEnable={false}
                ref={(map) => (this._map = map)}
                id={'map'}
            >
                <Mapbox.ShapeSource
                    shape={ sampleRoute }
                    id={'dataSource'}
                    ref={(route) => (this._route = route)}
                >
                    <Mapbox.LineLayer
                        style={ mapboxStyles.line }
                        id={'line'}
                    />
                </Mapbox.ShapeSource>
                <View
                    style={styles.locate}
                >
                    <Icon
                        name={'ios-locate-outline'}
                        type={'ionicon'}
                        onPress={this.handleFlyTo}
                    />
                </View>
            </Mapbox.MapView>
        );
    }
}
