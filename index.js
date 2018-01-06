// @flow

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/config/routes';

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: 'HomeScreen',
        title: 'Home'
    },
    drawer: {
        left: {
            screen: 'Drawer',
            disableOpenGesture: false
        }
    }
});
