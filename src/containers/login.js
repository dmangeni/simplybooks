//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import Login from '../components/login'
import {toJS} from '../utils/toJS'


const mapStateToProps = ({auth}) => {
  //console.log("Map state auth (Immutable Map) passed: ")

  return {
    authError: auth.get('error'),
    loading: auth.get('loading'),
    user: auth.get('user')
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

//Passes the global state of the application to the component.
//export default connect(() => {return {} }, mapDispatchToProps)(AppContainer);
export default connect((state) => mapStateToProps(state), mapDispatchToProps)(toJS(Login));
