/* @flow */

import * as lib from '../utils/createreducer'
import * as types from '../actions/types'
import * as common from '../actions/common'

export const database = lib.createReducer({},{
  [types.SET_DATABASE_REQUESTED](state, action){
    return Object.assign({}, state,{
      inProgress: true,
      error: "",
      success: " "
    });
  },

  [types.SET_DATABASE_FULFILLED](state, action){
    const {som,pom,user,accounting,reporting_and_analytics} = action.data
    return Object.assign({}, state,{
      inProgress: false,
      success:'Database Initialized.',
      som,
      pom,
      user,
      accounting,
      reporting_and_analytics,
    });
  },

  [types.SET_DATABASE_REJECTED](state, action){
    return Object.assign({}, state,{
      inProgress: false,
      error: "Error getting data.",
    });
  }
});

export const login = lib.createReducer({},{
  [types.LOGIN_REQUEST](state, action){
    return Object.assign({}, state,{
      pendingLoginRequest: true,
      logged_in: false,
    });
  },
  [types.LOGIN_SUCCESS](state, action){
    return Object.assign({}, state,{
      logged_in: true,
    });
  },

  [types.LOGIN_ERROR](state, action){
    return Object.assign({}, state,{
      logged_in: false,
    });
  }
});

/*/Clone the state because Redux works with object references
let clone_object = function(obj){
  return JSON.parse(JSON.stringify(obj));
}

function login_reducer(state, action){
  switch(action.type){
    case LOGIN_SUCCESS:
      new_state = clone_object(state);
      new_state.user.logged_in = true;
      return new_state;
    default:
      return state || new_state;
  }
}


[types.LOGIN_ERROR](state, action){
  let new_state = lib.clone_object(initial_state);
  return new_state;
}
;*/
