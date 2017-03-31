import * as types from './types';
import database from './firebase_config';

export function setDatabase() {
  return dispatch => {
    dispatch(setDatabaseRequest())
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
      dispatch(setDatabaseRequestFulfilled(data))
    })
    .catch((error) => {
      console.log(error);
      dispatch(setDatabaseRequestRejected());
    });
  }
}

export function setDatabaseRequest(){
  return {
    type: types.SET_DATABASE_REQUESTED,
  }
}
export function setDatabaseRequestFulfilled(data){
  return {
    type: types.SET_DATABASE_FULFILLED,
    data
  }
}

export function setDatabaseRequestRejected(){
  return {
    type: types.SET_DATABASE_REJECTED,
  }
}

//Called everytime the firebase ref changes.
export function replaceConfig(config) {
  return {
    type: 'CONFIG_REPLACE',
    value: config
  };
}

//Start listening to changes on the firebase ref when the app boots
function listenToConfigChanges() {
  return (dispatch, getState) => {
    let firebaseRef = lib.clone_object(getState());
    firebaseRef.child('config').on('value', (snapshot) => {
      dispatch(replaceConfig(snapshot.val()));
    });
  };
}
