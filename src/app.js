/* @flow */
import React, { Component} from 'react';
import {Provider, connect} from 'react-redux';
import { bindActionCreators} from 'redux'
import { ActionCreators } from './actions'
import firebase from 'firebase';
import { Map } from 'immutable';
import { LOGIN_SUCCESS } from './actions/types';

import store from './utils/configure_store';
import Router from './router';
import Spinner from './components/common/spinner';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { loaded: false };
  }

  componentWillMount(){

    store.dispatch(ActionCreators.setInitialState())
    store.dispatch(ActionCreators.initializeDatabase())

   /*firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loaded: true });

      console.log(user);

      let newMap = Map({
        email: user.email,
        uid: user.uid,
      })

      if (user) {
        store.dispatch({ type: LOGIN_SUCCESS, payload: newMap });
      }
    });*/
  }
  componentDidMount(){
    this.setState({ loaded: true });
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.loaded ? <Router /> : <Spinner />}
      </Provider>
    );
  }
}

export default App

/*
import React, { Component} from 'react';
import {Provider, connect} from 'react-redux';
import {Actions, Router, Scene } from 'react-native-router-flux'
import { bindActionCreators} from 'redux'
import { ActionCreators } from './actions'

import configureStore from './utils/configure_store';
import Login from './containers/login';
import Registration from './containers/registration';
import Scenes from './router';

const ConnectedRouter = connect()(Router);

const store = configureStore({});

class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Router scenes={Scenes} />
      </Provider>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => {return {} }, mapDispatchToProps)(App);
*/
