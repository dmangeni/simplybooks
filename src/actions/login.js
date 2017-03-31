import * as types from './types';
import * as firebase from 'firebase';
import {Alert} from 'react-native';


export function login_request(){
  return {
    type: types.LOGIN_REQUEST,
  }
}
export function login_failure(error){
  return {
    type: types.LOGIN_ERROR,
    error
  }
}

export function login(user){
  return (dispatch) => {
    dispatch(login_request());
    firebase.auth().signInWithEmailAndPassword(user.username, user.password).then(
      function(){
        console.log(user);
        dispatch({type: types.LOGIN_SUCCESS});
        //Navigate to home page
      }
    ).catch(function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        //console.log("Wrong Password.");
        Alert.alert('Login Error', 'wrong-password.');
      } else {
        //console.log(errorMessage);
        Alert.alert('Login Error', errorMessage);
      }
      dispatch(login_failure(errorMessage));
    });

  }
}
