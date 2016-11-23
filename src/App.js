/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Container, Header, Title, Content, Footer} from 'native-base';

import reducers from './reducers';
import CharacterList from './containers/CharacterList';

import myTheme from './themes/myTheme';

const store = createStore(reducers);

export default class GoTReactNative extends Component {
	render() {
		return(
		<Provider store={store}>
			<Container theme={myTheme}>
				<Header>
					<Title>Game Of Thrones Example</Title>
				</Header>
				<Content>
					<CharacterList />
				</Content>
			</Container>
		</Provider>
		)
	}
}

AppRegistry.registerComponent('GoTReactNative', () => GoTReactNative);
