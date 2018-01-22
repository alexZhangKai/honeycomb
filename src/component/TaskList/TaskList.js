// @flow

import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Animated
} from 'react-native';
import {
    Icon,
    Divider
} from 'react-native-elements';

import styles from './styles';

export default class TaskList extends Component <{}> {
    constructor(){
        super();
        const position = new Animated.ValueXY();
        this.state = {
            position,
            toggle: true
        };
    }

    handleToggleTaskList(){
        if(this.state.toggle) {
            Animated.timing(this.state.position, {
                toValue: { x: 0, y: 200 },
                duration: 500
            }).start(() => {
                this.state.toggle = false;
            });
        } else {
            Animated.timing(this.state.position, {
                toValue: { x: 0, y: 0 },
                duration: 500
            }).start(() => {
                this.state.toggle = true;
            });
        }
    }

    render(){
        return (
            <Animated.View style={[styles.container, this.state.position.getLayout()]}>
                <View style={styles.headline}>
                    <Text>
                        {'Current Task'}
                    </Text>
                    <Icon 
                        name={'keyboard-arrow-up'}
                        onPress={this.handleToggleTaskList.bind(this)}
                    />
                </View>
                <Divider />
            </Animated.View>
        );
    }
}
