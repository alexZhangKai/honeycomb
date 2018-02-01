// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Icon
} from 'react-native-elements';

import Map from '../../component/Map';
import TaskList from '../../component/TaskList';
import styles from './styles';
import type {
    Props,
    State
} from './types';

export default class Home extends Component<Props, State> {
    static navigatorStyle = { navBarHidden: true };

    handleShowJobList() {
        this.props.navigator.showModal({
            title: 'Job List',
            screen: 'JobPromptScreen'
        });
    }

    handleShowDrawer() {
        this.props.navigator.toggleDrawer({
            side: 'left'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <Icon
                        name={'view-list'}
                        onPress={this.handleShowDrawer.bind(this)}
                    />
                    <Icon
                        name={'assignment'}
                        onPress={this.handleShowJobList.bind(this)}
                    />
                </View>
                <View style={styles.togglableContainer}>
                    <Map />
                    <TaskList />
                </View>
            </View>
        );
    }
}
