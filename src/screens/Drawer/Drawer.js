// @flow

import React, { Component } from 'react';
import {
    View,
    Button
} from 'react-native';

import styles from './styles';

export default class Drawer extends Component<{}> {
    constructor(){
        super();
        this.handleButtonPressed = this.handleButtonPressed.bind(this);
    }

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
