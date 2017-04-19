import * as types from './types';
import firebase from 'firebase';
import database from './firebase_config';
import { Actions } from 'react-native-router-flux';
import {reset} from 'redux-form';

export function initializeDatabase(){
  return dispatch => {
    dispatch(initializeDatabaseRequest())
    return database.ref('/').once('value', snapshot => {
      const data = snapshot.val();

      //Set the database if there return value is null
      if(data === null){
        let initial_state = {
          user: 0,
          pom: 0,
          som: 0,
          reporting_and_analytics: 0,
          accounting: 0
        }
        database.ref('/').set(initial_state);
      }

      //Pass the database ref for storage into global state
      let databaseRef = database.ref('/');
      dispatch(initializeDatabaseFulfilled(databaseRef))
    })
    .catch((error) => {
      console.log(error);
      dispatch(initializeDatabaseFailure(error));
    });
  }
}

export function initializeDatabaseRequest(){
  return {
    type: types.INITIALIZE_DATABASE_REQUEST,
  }
}
export function initializeDatabaseFulfilled(data){
  return {
    type: types.INITIALIZE_DATABASE_SUCCESS,
    data
  }
}

export function initializeDatabaseFailure(){
  return {
    type: types.INITIALIZE_DATABASE_FAILURE,
    error
  }
}
