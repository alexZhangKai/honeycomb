// @flow

import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';

import ListItem from '../ListItem';
import jobs from '../../db-agent/Job';

import styles from './styles';
import type {
    Job,
    Props,
    State
} from './types';

export default class JobList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            scrollEnable: true,
            data: jobs.getJobList()
        };
    }

    keyExtractor = (item: Job) => item.uuid

    setScrollEnable(scrollEnable: boolean) {
        this.setState({
            scrollEnable
        });
    }

    async rejectJob(key: string) {
        this.setState((preState) => {
            const data = preState.data.filter((item) => item.uuid !== key);
            return {
                data
            };
        });
        await jobs.removeJob(key);
    }

    async acceptJob(key: string) {
        this.setState((preState) => {
            const data = preState.data.filter((item) => item.uuid !== key);
            return {
                data
            };
        });
        await jobs.removeJob(key);
    }

    renderItem({ item }: { item: Job }) {
        return (
            <ListItem
                id={item.uuid}
                fee={item.fee}
                size={item.size}
                attr={item.attr}
                accept={this.acceptJob.bind(this)}
                reject={this.rejectJob.bind(this)}
                setScrollEnable={(enable) => this.setScrollEnable(enable)}
            />
        );
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem.bind(this)}
                scrollEnabled={this.state.scrollEnable}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}
