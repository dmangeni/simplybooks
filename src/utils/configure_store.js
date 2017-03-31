import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';

//Only log while in development mode
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

export default function configureStore(initial_state){

  //Combines middlewares
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );

  //create the store
  const store = createStore(reducer, initial_state, enhancer);

  return store
}
