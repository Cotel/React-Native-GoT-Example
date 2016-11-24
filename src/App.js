/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Navigator
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router} from 'react-native-router-flux';

import reducers from './reducers';
import AppScenes from './AppScenes'

const store = createStore(reducers);

export default class GoTReactNative extends Component {
	render() {
		return(
		<Provider store={store}>
			<Router>
				{AppScenes}
			</Router>
		</Provider>
		)
	}
}

AppRegistry.registerComponent('GoTReactNative', () => GoTReactNative);
