import * as types from './types';
import * as firebase from 'firebase';
import {Alert} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal';
import {reset} from 'redux-form';
import { Map } from 'immutable';

const authFailMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Email is invalid.';
    case 'auth/user-disabled':
      return 'User is disabled.';
    case 'auth/user-not-found':
      return 'User not found.';
    case 'auth/wrong-password':
      return 'Password is invalid.';
    case 'auth/email-already-in-use':
      return 'Email address is already in use.';
    case 'auth/weak-password':
      return 'Password is not strong enough.';
    default:
      return 'Authentication failed.';
  }
};

export function setInitialState(){
  return {
    type: types.SET_INITIAL_STATE
  }
}
export function clearState(){
  return {
    type: types.CLEAR_STATE
  }
}
export function resetglobalStatus(){
  return {
    type: types.RESET_GLOBAL_STATUS,
  }
}
export function loginRequest(){
  return {
    type: types.LOGIN_REQUEST,
  }
}
export function loginFailure(error){
  return {
    type: types.LOGIN_FAILURE,
    payload: authFailMessage(error.code),
  }
}
export const login = ({email, password}) => {
  return (dispatch) => {
    dispatch(loginRequest());

    console.log(email);
    console.log(password);

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {

        let newMap = Map({
          email: email,
          password: password,
        })
        dispatch({type: types.LOGIN_SUCCESS, payload: newMap});

        //Navigate to home page
        Actions.hometabs();

        //Reset the form
        dispatch(reset('signin'));


      }).catch((error) => {

        dispatch(loginFailure(error));

        Alert.alert('Login Error',
        error.message + '. Please click OK and resubmit the details.',
        [{text: 'OK', onPress: () => resetglobalStatus()},]);

        //Reset the form
        dispatch(reset('signin'));
    });
  }
}
export function sendResetPasswordLink(email){
  return (dispatch) => {
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      console.log("Password reset link sent.")
      dispatch({type: types.PASSWORD_RESET_LINK_DELIVERY_SUCCESS})

      //Display an alert
      Alert.alert('Password Recovery',
      'A password reset link has been sent to your email. Please click the link to reset your password.',
      [{text: 'OK', onPress: () => Actions.login()},]);


    }).catch((error) => {
      console.log(error);
      dispatch({type: types.PASSWORD_RESET_LINK_DELIVERY_FAILURE, payload: error.message})
    });
  }
}

const NORTH_AMERICA =
['CA', 'MX', 'US', 'KE', 'UG',
'IN', 'NA', 'ZW', 'ZM','SZ'];

export function loadCountries(){
  return(dispatch) => {
    try{
      dispatch({type: types.LOAD_COUNTRIES_REQUEST});

      let userLocaleCountryCode = DeviceInfo.getDeviceCountry();
      const userCountryData = getAllCountries()
          .filter((country) => NORTH_AMERICA.includes(country.cca2))
          .filter((country) => country.cca2 === userLocaleCountryCode).pop();

      let countryData = {
        cca2: userLocaleCountryCode,
        callingCode:userCountryData.callingCode,
      }
      dispatch({type: types.LOAD_COUNTRIES_SUCCESS, countryData})

    }catch(e){
      console.log(e);
      dispatch({type: types.LOAD_COUNTRIES_FAILURE});
    }
  }
}

export const createUser = ({email, password}) => {

  return(dispatch) => {
    dispatch({type: types.REGISTER_USER_REQUEST});

    firebase.auth().createUserWithEmailAndPassword(email,password).then(
      function(){

        //Console log the email address and password
        console.log(email);
        console.log(password);

        dispatch({type: types.REGISTER_USER_SUCCESS});
      }
    ).catch(function(error){
      console.log(error.message)
      dispatch({type: types.REGISTER_USER_FAILURE, error});
    });
  }
}

export const registerBusiness = ({business, street, city, state, zipcode}) => {
  return(dispatch) => {
    dispatch({type: types.REGISTER_BUSINESS_REQUEST})
    let userRef = firebase.database().ref("user").push().set({
      'businessName': business,
      'streetaddress': street,
      'city': city,
      'state': state,
      'zipcode': zipcode,
    })
    dispatch({type: types.REGISTER_BUSINESS_SUCCESS})

    //Navigate to the home page
    Actions.hometabs()
  }
}
