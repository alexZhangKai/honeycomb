// @flow

import React, { Component } from 'react';
import {
    View,
    Button
} from 'react-native';

import styles from '../config/styles';

export default class Drawer extends Component<{}> {
    toggleDrawer = () => {
        this.props.navigator.toggleDrawer({
            side: 'left'
        });
    };

    handleButtonPressed(){
        this.toggleDrawer();
    }

    render(){
        return (
            <View
                style={styles.drawer}
            >
                <Button
                    title={'Home'}
                    onPress={this.handleButtonPressed}
                />
            </View>
        );
    }
}
