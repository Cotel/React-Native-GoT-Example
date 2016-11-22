/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const ToolbarAndroid = require('ToolbarAndroid');

import reducers from './reducers';
import CharacterList from './containers/CharacterList';

const store = createStore(reducers);

export default class GoTReactNative extends Component {
  render() {
    return(
    <Provider store={store}>  
        <View style={styles.container} >
            <ToolbarAndroid title="GoT React Native" />
            <CharacterList />
        </View>
    </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0
  },
  header: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  body: {
    flex: 2,
    backgroundColor: 'steelblue'
  }
})

AppRegistry.registerComponent('GoTReactNative', () => GoTReactNative);
