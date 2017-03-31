export function createReducer(initial_state, handlers){
  return function reducer(state = initial_state, action){
    if(handlers.hasOwnProperty(action.type)){
      return handlers[action.type](state, action)
    }
    else{
      return state
    }
  }
}
//Function that clones an object
export function clone_object(obj){
  return JSON.parse(JSON.stringify(obj));
}
