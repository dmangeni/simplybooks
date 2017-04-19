//@flow
import React, { Component, PropTypes } from 'react';
import {View, Text, TextInput,
  StyleSheet, TouchableOpacity,
  Image, Alert, ScrollView} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import * as common from '../styles/commonstyles';
import * as loginstyles from '../styles/loginstyles';
import Button from './common/button';
import { TextInputWithBorders } from './common/input';
import { Actions } from 'react-native-router-flux';


const propTypes = {
  //handleSubmit: PropTypes.func.isRequired,
  //login: PropTypes.func.isRequired,
  //authError: PropTypes.string.isRequired,
  //loading: PropTypes.bool.isRequired,
};

class PasswordResetModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
    }

  }

  goToRegistration(){
    //Navigate to registration page
  }

  getResetLink(email){
    console.log(email)
    this.props.sendResetPasswordLink(email)
  }

  render(){

    const fieldViewStyle = StyleSheet.flatten(loginstyles.fieldView)
    const {Container,resetContainer, linksContainer, logoContainer,
      resetPasswordBox, errorText, resetTextBox, resetButton,
    header, headerText, headerInstructions } = styles

    return (

      <View style ={[common.container, Container]}>

      {/*}  <Image
          source = {require('../gallery/image4.jpeg')}
          style = {loginstyles.loginBackgroundImage}>*/}
        {/*}<ScrollView style={common.container} keyboardShouldPersistTaps={'handled'}>*/}

        <View style={[logoContainer]}>

        </View>

        <View style = {[resetContainer]}>
            <View style={[loginstyles.boxContainer, resetPasswordBox]}>

              <View style = {header}>
                <Text style = {headerText}>
                  RESET YOUR PASSWORD
                </Text>

                <Text style = {headerInstructions}>
                    Forgot your password? Enter the email address that you registered
                    with. We will send you a link to reset your password.
                </Text>
              </View>

              <View style = {{flex: 0.5}}>
                <TextInput
                  style={[common.textinputWithBorders, resetTextBox]}
                  underlineColorAndroid={'transparent'}
                  autoCorrect={false}
                  placeholder='Enter Email address'
                  onChangeText={(email) => this.setState({email})}
                  value = {this.state.email}
                  />

                  <Button
                    underlayColor = '#ff8c31'
                    onPress = {(email = this.state.email) => {this.getResetLink(this.state.email)}}
                    textStyle = {{color: 'white'}}
                    buttonStyle = {{backgroundColor: '#1e9c98'}}
                    > SUBMIT
                  </Button>

                  {this.props.authError?
                    <Text style = {errorText}>{this.props.authError}</Text>
                    :
                    <View/>
                  }
              </View>
            </View>

            <View style={[loginstyles.boxContainer, linksContainer]}>
              <TouchableOpacity
                onPress = {() => Actions.login()}>
                <Text style = {loginstyles.links}> Already have an account?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress = {() => {this.goToRegistration()}}>
                <Text style = {loginstyles.links}>
                  New User? Create a new account
                </Text>
              </TouchableOpacity>
            </View>
        </View>
          {/*}</ScrollView>*/}
          {/*}{this.props.children}</Image>*/}
      </View>
    );
  }
}

PasswordResetModal.propTypes = propTypes;


const styles = {
  Container:{
    padding: 20,
  },
  logoContainer:{
    flex: 0.1,
  },
  resetContainer: {
    flex: 0.3,
  },
  resetPasswordBox:{
    flex: 0.4,
    alignItems: 'center',
    padding: 10,
    //borderWidth: 2,
  },
  linksContainer: {
    flex: 0.2,
    justifyContent: 'flex-start',
    //alignItems: 'flex-start',
    //borderWidth: 2,
  },
  header:{
    flex: 0.5,
    alignItems: 'center',
  },
  headerText:{
    margin: 10,
    fontSize: 20,
    color: '#1e9c98',
  },
  headerInstructions:{
    fontFamily: 'sans-serif-light',
    color: '#616058',
  },
  nextArrow:{
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftWidth: 20,
    borderLeftColor: 'red',
  },
  resetButton:{

  },
  resetTextBox:{
    borderRadius: 0,
    borderColor: '#1e9c98',
  },
  errorText: {
    color: '#ff5964',
    fontFamily: 'sans-serif-light',
  },
};

export default PasswordResetModal
