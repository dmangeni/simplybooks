/* @flow */
import * as lib from '../utils/createreducer'
import * as types from '../actions/types'
import { Map, fromJS, toJS, Record } from 'immutable';
import { createReducer } from 'redux-immutablejs'

export const auth = lib.createReducer({},{


  /**
|--------------------------------------------------
| Reducers - Login & Initial Setup
|--------------------------------------------------
*/

  [types.SET_INITIAL_STATE](state, action){
    return newObj = Map({
        error:'',
        loading: false,
        user: null,
    })
  },
  [types.CLEAR_STATE](state, action){
    return newMap = Map({
        error:'',
        loading: false,
        user: null,
    })
  },

  //Sets the Status of the Database
  [types.INITIALIZE_DATABASE_REQUEST](state, action){
    let newMap = Map({
      inProgress: true,
    })

    //Set loading to false- So that we don't trigger the activity indicator
    return state.setIn(['loading'], false).merge({database: newMap});
  },

  [types.INITIALIZE_DATABASE_SUCCESS](state, action){

    //console.log(action.data)

    let newMap = Map({
      databaseRef: action.data
    })

    return state.setIn(['loading'], false)
    .setIn(['database','inProgress'], false)
    //.mergeIn(['database'],newMap)

  },

  [types.INITIALIZE_DATABASE_FAILURE](state, action){

    let newMap = Map({
      error: action.data.message,
    })

    console.log(action.data)

    return state.setIn(['loading'], false)
    .setIn(['database','inProgress'], false)
    .mergeIn(['database'],newMap)
  },


  //Handles Login Request
  [types.LOGIN_REQUEST](state, action){

    let newMap = Map({
      pendingLoginRequest: true,
      logged_in: false,
    })
    return state.setIn(['loading'], true).merge({login: newMap});
  },
  [types.LOGIN_SUCCESS](state, action){

    return state.setIn(['loading'], false)
    .setIn(['login','pendingLoginRequest'], false)
    .setIn(['login','logged_in'], true)
    .mergeIn(['login'],action.payload)
  },

  [types.LOGIN_FAILURE](state, action){
    return state.setIn(['loading'], false)
    .setIn(['error'], action.payload)
    .setIn(['login','pendingLoginRequest'], false)
    .setIn(['login','logged_in'], false)
  },

  [types.RESET_GLOBAL_STATUS](state, action){
    return state.setIn(['error'],'')
  },

  [types.PASSWORD_RESET_LINK_DELIVERY_FAILURE](state, action){
    return state.setIn(['error'], action.payload)
  },

  [types.PASSWORD_RESET_LINK_DELIVERY_SUCCESS](state, action){
    return state.mergeIn(['login'],{isDisplayResetSuccessModal: true})
  },


  /**
|--------------------------------------------------
| Reducers - Registration
|--------------------------------------------------
*/
[types.REGISTER_USER_REQUEST](state, action){

  let newMap = Map({
    pendingRegistrationRequest: true,
    logged_in: false,
  })
  return state.setIn(['loading'], true).merge({registration: newMap});
},

[types.REGISTER_USER_SUCCESS](state, action){

  return state.setIn(['loading'], false)
  .setIn(['registration','pendingRegistrationRequest'], false)
  .setIn(['registration','logged_in'], true)
  //.mergeIn(['registration'],action.payload)
},

[types.REGISTER_USER_FAILURE](state, action){

  return state.setIn(['loading'], false)
  .setIn(['error'], action.payload)
  .setIn(['registration','pendingRegistrationRequest'], false)
  .setIn(['registration','logged_in'], false)
},

[types.REGISTER_BUSINESS_REQUEST](state, action){


  return state
},



});















/*export const login = lib.createReducer({},{
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

  [types.LOGIN_FAILURE](state, action){
    return Object.assign({}, state,{
      logged_in: false,
    });
  }
});

export const usercountry = lib.createReducer({},{
  [types.LOAD_COUNTRIES_REQUEST](state, action){
    return Object.assign({}, state,{
      pendingLoadingRequest: true,
      isCountriesLoaded: false,
    });
  },
  [types.LOAD_COUNTRIES_SUCCESS](state, action){
    const {cca2, callingCode} = action.countryData
    return Object.assign({}, state,{
      isCountriesLoaded: true,
      pendingLoadingRequest: false,
      cca2,
      callingCode,
    });
  },

  [types.LOAD_COUNTRIES_FAILURE](state, action){
    return Object.assign({}, state,{
      isCountriesLoaded: false,
      error: action.error,
    });
  }
});


export const user = lib.createReducer({},{
  [types.REGISTER_USER_REQUEST](state, action){
    return Object.assign({}, state,{
      pendingUserRegistrationRequest: true,
      isUserCreated: false,
    });
  },
  [types.REGISTER_USER_SUCCESS](state, action){
    return Object.assign({}, state,{
      isUserCreated: true,
      pendingUserRegistrationRequest: false,
    });
  },

  [types.REGISTER_USER_FAILURE](state, action){
    return Object.assign({}, state,{
      isUserCreated: false,
    });
  }
},


});

/*export const init = lib.createReducer({},{
  [types.SET_INITIAL_STATE](state, action){
    return newObj = Map({
        error:'',
        loading: false,
        user: null,
    })
  },
  [types.CLEAR_STATE](state, action){
    return newMap = Map({
        error:'',
        loading: false,
        user: null,
    })
  }
});

export const database = lib.createReducer({},{
  [types.INITIALIZE_DATABASE_REQUEST](state, action){
    return state.merge({inprogress:true})
  },

  /*[types.INITIALIZE_DATABASE_SUCCESS](state, action){
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

  [types.INITIALIZE_DATABASE_FAILURE](state, action){
    return Object.assign({}, state,{
      inProgress: false,
      error: "Error getting data.",
    });
  }
});*/

/*export const login = lib.createReducer({},{
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

  [types.LOGIN_FAILURE](state, action){
    return Object.assign({}, state,{
      logged_in: false,
    });
  }
});

export const usercountry = lib.createReducer({},{
  [types.LOAD_COUNTRIES_REQUEST](state, action){
    return Object.assign({}, state,{
      pendingLoadingRequest: true,
      isCountriesLoaded: false,
    });
  },
  [types.LOAD_COUNTRIES_SUCCESS](state, action){
    const {cca2, callingCode} = action.countryData
    return Object.assign({}, state,{
      isCountriesLoaded: true,
      pendingLoadingRequest: false,
      cca2,
      callingCode,
    });
  },

  [types.LOAD_COUNTRIES_FAILURE](state, action){
    return Object.assign({}, state,{
      isCountriesLoaded: false,
      error: action.error,
    });
  }
});


export const user = lib.createReducer({},{
  [types.REGISTER_USER_REQUEST](state, action){
    return Object.assign({}, state,{
      pendingUserRegistrationRequest: true,
      isUserCreated: false,
    });
  },
  [types.REGISTER_USER_SUCCESS](state, action){
    return Object.assign({}, state,{
      isUserCreated: true,
      pendingUserRegistrationRequest: false,
    });
  },

  [types.REGISTER_USER_FAILURE](state, action){
    return Object.assign({}, state,{
      isUserCreated: false,
    });
  }
});



/*export const registration = lib.createReducer({},{
  [types.LOAD_REGISTRATION_SUCCESS](state, action){
    return Object.assign({}, state,{
      isRegistrationPageLoaded: true,
    });
  },
});*/



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
