//@flow
import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Text, TextInput,
  StyleSheet,TouchableHighlight, TouchableOpacity,
  Image, Alert, ScrollView} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import * as common from '../styles/commonstyles';
import * as loginstyles from '../styles/loginstyles';
import Button from './common/button';
import Spinner from './common/spinner';
import HideoInput from './common/hideoInput';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import {validate,syncValidate} from '../actions/validate';
import { Actions,ActionConst } from 'react-native-router-flux';




const propTypes = {
  authError: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  resetglobalStatus: PropTypes.func.isRequired,
};

class Login extends Component {
  constructor(props){
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      disableLoginButton: true,
    }

  }

  resetglobalStatus(){
    this.props.resetglobalStatus();
  }

  handleFormSubmit(props){
    const { email, password } = props;
    this.props.login({ email, password });
  }

  render(){

    const fieldViewStyle = StyleSheet.flatten(loginstyles.fieldView)
    const {handleSubmit,valid, submitting} = this.props;

    return (

      <View style ={loginstyles.container}>

      {/* <Image
          source = {require('../gallery/image4.jpeg')}
          style = {loginstyles.loginBackgroundImage}>*/}
        <ScrollView style={common.container} keyboardShouldPersistTaps={'handled'}>
        <View style={[loginstyles.logoContainer]}>
          <Image source = {require('../gallery/image1.png')}/>
        </View>

        <View style = {[loginstyles.loginform]}>
            <View style={[loginstyles.boxContainer,loginstyles.loginContainer]}>

              <Field
                name = {'email'}
                component = {HideoInput}
                iconClass={FontAwesomeIcon}
                iconName={'envelope'}
                iconColor={'white'}
                placeholder="Email Address"
                inputStyle = {loginstyles.hideoTextBox}
                containerStyle = {fieldViewStyle}
                type = 'password'
                />

              <Field
                name = {'password'}
                component = {HideoInput}
                iconClass={FontAwesomeIcon}
                iconName={'key'}
                iconColor={'white'}
                placeholder="Password"
                inputStyle = {loginstyles.hideoTextBox}
                containerStyle = {fieldViewStyle}
                secureTextEntry = {true}
                />
            </View>

            <View style={[loginstyles.boxContainer,loginstyles.linksContainer]}>

              { this.props.loading?
                <View style = {loginstyles.loginbutton}>
                  <Spinner/>
                </View>
                :
                <View style = {loginstyles.loginbutton}>
                  <Button
                    disabled = {submitting}
                    underlayColor = '#ff8c31'
                    buttonStyle = {{backgroundColor: '#006c68'}}
                    textStyle = {{color: 'white'}}
                    onPress={handleSubmit(this.handleFormSubmit)}>LOG IN
                  </Button>
                </View>
              }

              <View style = {[loginstyles.quicklinksbox]}>
                <TouchableOpacity
                  onPress = {() => Actions.passwordResetModal()}>
                  <Text style = {loginstyles.links}> Forgot Password?</Text>
                </TouchableOpacity>
                  <Text style={loginstyles.separator}> | </Text>

                <TouchableOpacity
                  onPress = {() => {Actions.registration()}}>
                  <Text style = {loginstyles.links}>
                    Create a new account
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
          </ScrollView>
          {/*{this.props.children}</Image>
          placeholderTextColor= 'white' //Add to the textboxes*/}

      </View>
    );
  }
}

Login.propTypes = propTypes;
Login = reduxForm({
  form: 'signin',
  validate: validate,
})(Login);

export default Login
