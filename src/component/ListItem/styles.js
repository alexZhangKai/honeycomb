import {
    StyleSheet,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    listItem: {
        height: 140,
        marginLeft: -width,
        justifyContent: 'center'
    },
    absoluteCell: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    absoluteCellText: {
        margin: 16,
        color: 'white',
        marginRight: 10
    },
    innerCell: {
        width,
        height: 140,
        marginLeft: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    },
    info: {
        alignItems: 'center',
        margin: 10
    },
    image: {
        height: 130,
        width: 130,
        marginBottom: 5,
        marginTop: 5
    }
});
