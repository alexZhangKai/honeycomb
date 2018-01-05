import { Navigation } from 'react-native-navigation';

import HomeScreen from '../screens/Home';
import Drawer from '../screens/Drawer';

export function registerScreens(){
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
    Navigation.registerComponent('Drawer', () => Drawer);
}
