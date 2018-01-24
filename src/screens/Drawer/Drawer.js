// @flow

import React, { Component } from 'react';
import {
    View,
    Button
} from 'react-native';

import styles from './styles';

type Props = {
    navigator: Object
}

type State = {
}

export default class Drawer extends Component<Props, State> {
    toggleDrawer() {
        this.props.navigator.toggleDrawer({
            side: 'left'
        });
    }

    handleButtonPressed() {
        this.toggleDrawer();
    }

    render() {
        return (
            <View
                style={styles.drawer}
            >
                <Button
                    title={'Home'}
                    onPress={this.handleButtonPressed.bind(this)}
                />
            </View>
        );
    }
}
