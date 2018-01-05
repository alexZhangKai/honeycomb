// @flow

import React, { Component } from 'react';
import { View, Button } from 'react-native';

import Map from '../component/Map/Map';
import styles from '../config/styles';

export default class Home extends Component<{}> {
    toggleDrawer = () => {
        this.props.navigator.toggleDrawer({
            side: 'left'
        });
    };

    render(){
        return (
            <View style={styles.container}>
                <Map />
                <Button
                    title={'Drawer'}
                    onPress={() => this.toggleDrawer}
                />
            </View>
        );
    }
}
