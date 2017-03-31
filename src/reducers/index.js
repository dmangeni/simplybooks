import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import *as userReducer from './login';

export default combineReducers(Object.assign({},
  userReducer,
  formReducer
));
