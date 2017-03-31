/* @flow */
import React,{ Component } from 'react';
import { AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import AppContainer from './src/containers/appcontainer';
import configureStore from './src/utils/configure_store';

const store = configureStore({});

const App = () => (
  <Provider store = {store}>
    <AppContainer/>
  </Provider>
);

AppRegistry.registerComponent('simplybooks', () => App);
