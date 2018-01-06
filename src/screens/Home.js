// @flow

import React, { Component } from 'react';
import { View, Button } from 'react-native';

import Map from '../component/Map/Map';
import styles from '../config/styles';

export default class Home extends Component<{}> {

    render(){
        return (
            <View style={styles.container}>
                <Map />
            </View>
        );
    }
}
