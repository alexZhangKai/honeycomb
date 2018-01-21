import React, { Component } from 'react';
import {
    View
} from 'react-native';

import JobList from '../../component/JobList';
import styles from '../../config/styles';

export default class JobPrompt extends Component<{}> {
    componentDidMount(){
        this.props.navigator.setDrawerEnabled({
            side: 'left',
            enable: false
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <JobList />
            </View>
        );
    }
}
