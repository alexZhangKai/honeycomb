import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    },
    button: {
        position: 'absolute',
        width: 50,
        height: 50,
        bottom: 10,
        left: 10,
        zIndex: 1
    }
});
