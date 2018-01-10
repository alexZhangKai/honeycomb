import React, { Component } from 'react';
import {
    View
} from 'react-native';

import JobList from '../component/JobList/JobList';
import styles from '../config/styles';

import data from '../data/sameleJobs';

export default class JobPrompt extends Component<{}> {
    componentDidMount(){
        this.props.navigator.setDrawerEnabled({
            side: 'left',
            enable: false
        });
    }

    render(){
        return (
            <View
                style={styles.container}
            >
                <JobList data={data} />
            </View>
        );
    }
}
