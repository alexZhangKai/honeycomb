// @flow

import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';

import ListItem from '../ListItem/ListItem';
import jobs from '../../db-agent/Job';
import styles from './styles';

export default class JobList extends Component<{}> {
    constructor(props){
        super(props);

        this.state = {
            scrollEnable: true,
            data: jobs.getJobList()
        };
    }

    setScrollEnable(scrollEnable){
        this.setState({
            scrollEnable: scrollEnable
        });
    }

    async rejectJob(key){
        const data = this.state.data.filter(item => item.uuid !== key);
        this.setState({
            data: data
        });
        await jobs.removeJob(key);
    }

    async acceptJob(key){
        const data = this.state.data.filter(item => item.uuid !== key);
        this.setState({
            data: data
        });
        await jobs.removeJob(key);
    }

    renderItem = ({ item }) => (
        <ListItem
            id={item.uuid}
            fee={item.fee}
            size={item.size}
            attr={item.attr}
            accept={this.acceptJob.bind(this)}
            reject={this.rejectJob.bind(this)}
            setScrollEnable={(enable) => this.setScrollEnable(enable)}
        />
    )

    keyExtractor = (item) => item.uuid

    render(){
        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                scrollEnabled={this.state.scrollEnable}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}
