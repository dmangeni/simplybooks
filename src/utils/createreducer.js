import { Map, fromJS } from 'immutable';

export function createReducer(initial_state, handlers){
  return function reducer(state = initial_state, action){

    let immutable_state = fromJS(state)

    if(handlers.hasOwnProperty(action.type)){
      return handlers[action.type](immutable_state, action)
    }
    else{
      return immutable_state
    }
  }
}
//Function that clones an object
export function clone_object(obj){
  return JSON.parse(JSON.stringify(obj));
}
