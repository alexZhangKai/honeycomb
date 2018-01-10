// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Icon
} from 'react-native-elements';

import Map from '../component/Map';
import styles from '../config/styles';

export default class Home extends Component<{}> {
    componentDidMount(){
        this.props.navigator.toggleNavBar({
            to: 'show',
            animated: false
        });
    }

    // Open job list screen
    handleJobList(){
        this.props.navigator.showModal({
            screen: 'JobPromptScreen',
            title: 'Job List'
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <View
                    style={styles.jobList}
                >
                    <Icon
                        name={'view-list'}
                        onPress={this.handleJobList.bind(this)}
                    />
                </View>
                <Map />
            </View>
        );
    }
}
