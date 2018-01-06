// @flow

import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {
    Icon
} from 'react-native-elements';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import Canvas from 'react-native-canvas';

import { accessToken } from '../../config/settings';
import styles from './styles';

Mapbox.setAccessToken(accessToken);

type Props = {

};

type State = {
    usrLoc: Array<number>
};

export default class Map extends Component<Props, State> {
    constructor(){
        super();
        this.handleFlyTo = this.handleFlyTo.bind(this);
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
        this.setState({
            usrLoc: [location.coords.longitude, location.coords.latitude]
        });
    }

    // Change view to current user location
    handleFlyTo(){
        this._map.flyTo(this.state.usrLoc);
    }

    _canvas = this.createCanvas.bind(this);

    createCanvas(canvas){
        const ctx = canvas.getContext('2d');
        const height = 500;
        const width = 600;
        canvas.height = height;
        canvas.width = width;

        async function draw(){
            const usrLocInView = await this._map.getPointInView(this.state.usrLoc);
            ctx.clearRect(0, 0, height, width);
            ctx.strokeRect(usrLocInView[0] - 25, usrLocInView[1] - 25, 50, 50);
        }
        setInterval(draw.bind(this), 10);
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
                onPress={this.handleMapPressed}
            >
                <View
                    style={styles.locate}
                >
                    <Icon
                        name={'ios-locate-outline'}
                        type={'ionicon'}
                        onPress={this.handleFlyTo}
                    />
                </View>
                <Canvas
                    ref={this._canvas}
                />
            </Mapbox.MapView>
        );
    }
}
