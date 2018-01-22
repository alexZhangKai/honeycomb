import {
    StyleSheet,
    Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        height: height / 2,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white'
    },
    headline: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
