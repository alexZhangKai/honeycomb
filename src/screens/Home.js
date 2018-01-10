// @flow

import React, { Component } from 'react';
import { View } from 'react-native';

import Map from '../component/Map/Map';
import styles from '../config/styles';

export default class Home extends Component<{}> {
    componentDidMount(){
        this.props.navigator.toggleNavBar({
            to: 'show',
            animated: false
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <Map />
            </View>
        );
    }
}
