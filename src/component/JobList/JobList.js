// @flow

import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';

import ListItem from '../ListItem/ListItem';

import styles from './styles';

export default class JobList extends Component<{}> {
    constructor(props){
        super(props);

        this.state = {
            scrollEnable: true,
            data: this.props.data
        };
    }

    setScrollEnable(scrollEnable){
        this.setState({
            scrollEnable: scrollEnable
        });
    }

    rejectJob(key){
        const data = this.state.data.filter(item => item.key !== key);
        this.setState({
            data: data
        });
    }

    acceptJob(key){
        const data = this.state.data.filter(item => item.key !== key);
        this.setState({
            data: data
        });
    }

    renderItem = ({ item }) => (
        <ListItem
            id={item.key}
            fee={item.fee}
            size={item.size}
            attr={item.attr}
            accept={this.acceptJob.bind(this)}
            reject={this.rejectJob.bind(this)}
            setScrollEnable={(enable) => this.setScrollEnable(enable)}
        />
    )

    render(){
        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                scrollEnabled={this.state.scrollEnable}
            />
        );
    }
}
