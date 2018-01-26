// @flow

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    drawer: {
        flex: 1,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    jobList: {
        position: 'absolute',
        top: 10,
        right: 10
    }
});
