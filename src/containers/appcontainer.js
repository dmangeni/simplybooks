//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators} from 'redux'
import Home from '../components/home'
import Registration from '../components/registration'


class AppContainer extends Component {
  render(){
    return <Registration {...this.props}/>
  }
}

function mapStateToProps(state){
  return {
    //searchedRecipes: state.searchedRecipes- reducer that fetches the array of recipes
    //Pass any data that you will like to use on this component. use the state
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

//Passes the global state of the application to the component.
//export default connect(() => {return {} }, mapDispatchToProps)(AppContainer);
export default connect((state) => mapStateToProps(state), mapDispatchToProps)(AppContainer);
