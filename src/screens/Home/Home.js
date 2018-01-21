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

    handleShowJobList(){
        this.props.navigator.showModal({
            title: 'Job List',
            screen: 'JobPromptScreen'
        });
    }

    handleShowDrawer(){
        this.props.navigator.toggleDrawer({
            side: 'left'
        });
    }

    render(){
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
                <Map />
            </View>
        );
    }
}
