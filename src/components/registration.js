//@flow
import React, { Component } from 'react';
import
{ AppRegistry, View, Text, TextInput,StyleSheet} from 'react-native';
import * as common from '../styles/commonstyles';
import RegistrationForm from './registrationform';
//import * as homestyles from '../styles/home';


class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount(){

  }

  signup(user){
    //this.props.login(user);
  }
  render(){
    return (
      <RegistrationForm/>
    );
  }
}
export default Registration;
