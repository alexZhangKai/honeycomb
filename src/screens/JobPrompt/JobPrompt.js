// @flow

import React, { Component } from 'react';
import {
    View
} from 'react-native';

import JobList from '../../component/JobList';
import styles from '../../config/styles';
import type {
    Props,
    State
} from './types';

export default class JobPrompt extends Component<Props, State> {
    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Done',
                id: 'done'
            }
        ]
    };

    constructor(props: Props) {
        super(props);
        this.props.navigator.setDrawerEnabled({
            side: 'left',
            enable: false
        });
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event: Object) {
        if (event.type === 'NavBarButtonPress') if (event.id === 'done') this.props.navigator.dismissModal();
    }

    render() {
        return (
            <View style={styles.container}>
                <JobList />
            </View>
        );
    }
}
