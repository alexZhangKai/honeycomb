import { StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

export const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
    },
    locate: {
        position: 'absolute',
        bottom: 25,
        left: 0,
        width: 30,
        height: 30
    }
});

export const mapboxStyles = Mapbox.StyleSheet.create({
    line: {
        lineColor: 'blue',
        lineWidth: 5
    }
});
