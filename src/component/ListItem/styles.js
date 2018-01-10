import {
    StyleSheet,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    listItem: {
        height: 80,
        marginLeft: -100,
        justifyContent: 'center'
    },
    absoluteCell: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    absoluteCellText: {
        margin: 16,
        color: 'white'
    },
    innerCell: {
        width,
        height: 80,
        marginLeft: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
