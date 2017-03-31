/* @flow */
import * as SOM_Actions from './som_actions';
import * as login_actions from './login';
import * as common from './common';
import * as firebase from './firebase';

export const ActionCreators = Object.assign({},
  SOM_Actions,
  login_actions,
  firebase,
  common,
);

/*
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

//Not making API calls to backend yet
export function login(userCredentials){
  if(userCredentials.username === 'testuser' && userCredentials.password === 'password'){
    return {type: LOGIN_SUCCESS}
  }
  else{
    return {type: LOGIN_ERROR}
  }
}*/
