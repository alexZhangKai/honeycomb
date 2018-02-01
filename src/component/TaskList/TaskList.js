// @flow

import React, { Component } from 'react';
import {
    View,
    Text,
    Animated
} from 'react-native';
import {
    Icon,
    Divider
} from 'react-native-elements';

import styles from './styles';
import type {
    Props,
    State
} from './types';

export default class TaskList extends Component <Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            flex: new Animated.Value(0.2),
            toggle: true
        };
    }

    handleToggleTaskList() {
        if (this.state.toggle) {
            Animated.timing(this.state.flex, {
                toValue: 1,
                duration: 100
            }).start(() => {
                this.setState((prevState) => ({
                    toggle: !prevState.toggle
                }));
            });
        }
        else {
            Animated.timing(this.state.flex, {
                toValue: 0.2,
                duration: 100
            }).start(() => {
                this.setState((prevState) => ({
                    toggle: !prevState.toggle
                }));
            });
        }
    }

    render() {
        return (
            <Animated.View
                style={[
                    styles.container,
                    {
                        flex: this.state.flex
                    }
                ]}
            >
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
