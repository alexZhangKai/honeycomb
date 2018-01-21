// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Icon
} from 'react-native-elements';

import Map from '../../component/Map';
import styles from './styles';

export default class Home extends Component<{}> {
    static navigatorStyle = { navBarHidden: true };

    // Open job list screen
    handleShowJobList(){
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
                        style={styles.jobList}
                        name={'view-list'}
                        onPress={this.handleShowJobList.bind(this)}
                    />
                </View>
                <Map />
            </View>
        );
    }
}
