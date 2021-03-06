/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
