// @flow

import { Navigation } from 'react-native-navigation';

import HomeScreen from '../screens/Home';
import Drawer from '../screens/Drawer';
import JobPromptScreen from '../screens/JobPrompt';

export function registerScreens() {
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
    Navigation.registerComponent('Drawer', () => Drawer);
    Navigation.registerComponent('JobPromptScreen', () => JobPromptScreen);
}
