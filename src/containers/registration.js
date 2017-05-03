//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import Registration from '../components/registration'


const mapStateToProps = ({auth}) => {
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
export default connect((state) => mapStateToProps(state), mapDispatchToProps)(Registration);
