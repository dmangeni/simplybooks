import * as firebase from 'firebase';
import { login } from '../actions/login';
import { Map, fromJS, toJS, Record } from 'immutable';


validateEmail = (email) => {
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}


const validate = (values) => {
  const errors = {}

  if (!values.email || values.email.trim() === ''){
    errors.email = 'Email is Required'
  }
  else if (!validateEmail(values.email)){
    errors.email = 'Invalid email address.'
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Password is Required'
  }
  else if (values.password.length < 8) {
    errors.password = 'Password must be more than 8 characters'
  }

  return errors
}

//Make client checks
const syncValidate = (values) => {
  const errors = {}
  if (!values.email || values.email.trim() === ''){
    errors.email = 'Email is Required'
  }
  else if (!validateEmail(values.email)){
    errors.email = 'Invalid email address.'
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Password is Required'
  }
  else if (values.password.length < 8) {
    errors.password = 'Password must be more than 8 characters'
  }

  if (!values.business || values.business.trim() === '') {
    errors.business = 'Business Name is Required'
  }
  if (!values.street || values.street.trim() === '') {
    errors.street = 'Street Address is Required'
  }
  if (!values.zipcode || values.zipcode.trim() === '') {
    errors.zipcode = 'Zipcode is Required'
  }

  return errors
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const asyncValidate = (values, dispatch) => {

  return sleep(1000) // simulate server latency

  //Attempts to sign in a user using the email and password provided.

  .then((result) => {

      //Error's "data" is in the result.payload.response.data
      //success's "data" is in result.payload.data

      /*if(!result.payload.response){
        return;
      }

      let { data, status} = result.payload.response;

      //if status is not 200 or any one of the fields exist, then there is a field error
      if (status != 200 || data.username || data.email) {
        //let other components know of error by updating the redux` state
        dispatch(validateUserFieldsFailure(data));
        throw data;
      } else {
        //let other components know that everything is fine by updating the redux` state
        dispatch(validateUserFieldsSuccess(data)); //ps: this is same as dispatching RESET_USER_FIELDS
      }*/
      /*/Check if there was any error
      if(!action.error){
        console.log("User information is valid")
      }
      else{
        throw { createerror: action.error.message }
      }*/
    })
}

module.exports = {
  validate, syncValidate,asyncValidate,
}
