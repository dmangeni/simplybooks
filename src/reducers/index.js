import {combineReducers} from 'redux'
import *as login from './login'
import * as routing from './navigation'
import * as registration from './registration'
import {reducer as formReducer} from 'redux-form'

export default combineReducers(Object.assign({},
  routing,
  registration,
  login,
  {form: formReducer},
));
