import React, { Component } from 'react';
import {
    View
} from 'react-native';

import JobList from '../../component/JobList';
import styles from '../../config/styles';

export default class JobPrompt extends Component<{}> {
    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Done',
                id: 'done'
            }
        ]
    };

    constructor(props){
        super(props);
        this.props.navigator.setDrawerEnabled({
            side: 'left',
            enable: false
        });
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event){
        if(event.type === 'NavBarButtonPress') {
            if(event.id === 'done') {
                this.props.navigator.dismissModal();
            }
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <JobList />
            </View>
        );
    }
}
