// @flow

import React, { Component } from 'react';
import {
    Button
} from 'react-native';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import Canvas from 'react-native-canvas';

import { accessToken } from '../../config/settings';
import styles from './styles';

Mapbox.setAccessToken(accessToken);

type Props = {

};

type State = {
    usrLoc: Array<number>,
};

export default class Map extends Component<Props, State> {
    constructor(){
        super();
        this.handleMapPressed = this.handleMapPressed.bind(this);
        this.handleButtonPressed = this.handleButtonPressed.bind(this);
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
        // this._canvas = (canvas) => {
        //     const ctx = canvas.getContext('2d');
        //     ctx.fillStyle = 'purple';
        //     const loc = [location.coords.latitude, location.coords.longitude];
        //     this._map.getPointInView(loc).then((data) => {
        //         ctx.fillRect(data[0],data[1]);
        //     });
        //     // ctx.fillRect(0, 0, 50, 50);
        // };
    }

    async handleMapPressed(){
        // this._map.getVisibleBounds().then((data) => {
        //     const boundOne = [data[0][1], data[0][0]];
        //     const pointInView = await this._map.getPointInView(boundOne);
        // });
        const bounds = await this._map.getVisibleBounds();
        const boundOne = [bounds[0][1], bounds[0][0]];
        const pointInView = await this._map.getPointInView(boundOne);
        console.log(pointInView);
    }

    handleButtonPressed(){
        console.log(this.state.usrLoc);
    }

    _canvas = (canvas) => {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'purple';
        // ctx.fillRect(0, 0, 100, 100);
        ctx.arc(50, 50, 49, 0, Math.PI * 2, true);
        ctx.fill();
    }

    render(){
        return (
            <Mapbox.MapView
                styleURL={Mapbox.StyleURL.Street}
                zoomLevel={15}
                style={styles.map}
                showUserLocation={true}
                ref={(map) => (this._map = map)}
                id={'map'}
                onPress={this.handleMapPressed}
            >
                <Button
                    style={styles.button}
                    onPress={this.handleButtonPressed}
                    title={'z'}
                />
                <Canvas
                    ref={this._canvas}
                />
            </Mapbox.MapView>
        );
    }
}
