//@flow
import React, { Component, PropTypes } from 'react';
import {
        AppRegistry, View, Text, TextInput,StyleSheet, Image,
        Picker, ScrollView, Dimensions, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Field, reduxForm } from 'redux-form';
import * as common from '../styles/commonstyles';
import * as registrationstyles from '../styles/registrationform';
import {syncValidate, asyncValidate, submit} from '../actions/validate';
import { TextInputWithBorders, KohanaInput, TextInputWithIcons } from './common/input';
import Button from './common/button';
import Spinner from './common/spinner';
import Container from './common/container';
import Item from './common/item';


//Custom input component
const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  //clearState: PropTypes.func.isRequired,
  //signUpUser: PropTypes.func.isRequired,
  //authError: PropTypes.string.isRequired,
  //loading: PropTypes.bool.isRequired,
};


class Registration extends Component {
  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(props) {
    const { email, password, business, street, city, state, zipcode} = props;

    //Register the user account and Business Details
    this.props.createUser({ email, password});
    this.props.registerBusiness({business, street, city, state, zipcode});
  }

  render(){

    let {height, width} = Dimensions.get('window');

    const {asyncValidating, handleSubmit, submitting, asyncValidate, validate} = this.props;

    return (
      <View style = {registrationstyles.container}>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style = {registrationstyles.navbar}>
          <Text style={registrationstyles.navbarText}>SIGN UP</Text>
        </View>
        <View style = {registrationstyles.regform}>

          <View style = {[registrationstyles.personal, registrationstyles.section]}>

            <Text style = {registrationstyles.headerText}>ADMIN ACCOUNT DETAILS</Text>

            <Item>
              <Field
                name = 'email'
                component={TextInputWithIcons}
                iconName = 'envelope'
                placeholder = "Email Address"
                />
            </Item>

            <Item>
              <Field
                name = 'password'
                component={TextInputWithIcons}
                placeholder = "Password"
                secureTextEntry
                iconName = 'lock'
                />
            </Item>

          </View>

          <View style = {[registrationstyles.section, registrationstyles.business]}>
            <Text style={registrationstyles.headerText}>BUSINESS ACCOUNT DETAILS</Text>

            <Item>
              <Field
                name = 'business'
                component={TextInputWithIcons}
                placeholder = "Name of Business"
                iconName = 'building'
                />
            </Item>

            <Item>
              <Field
                name = 'street'
                component={TextInputWithIcons}
                placeholder = 'Street Address'
                iconName = 'street-view'
                />
            </Item>


            <Item style = {{flexDirection: 'row',alignItems: 'center',}}>
              <Item>
                <Field
                  name = 'city'
                  component={TextInputWithIcons}
                  placeholder = 'City'
                  iconName = 'map-marker'
                  inputStyle = {{width: width * 0.232}}
                  />
              </Item>

              <Item>
                <Field
                  name = 'state'
                  component={TextInputWithIcons}
                  placeholder = 'State'
                  inputStyle = {{width: width * 0.232}}
                  iconName = 'map'
                  />
              </Item>
            </Item>

            <Item>
              <Field
                name = 'zipcode'
                component={TextInputWithIcons}
                placeholder = 'Zipcode'
                iconName = 'road'
                />
            </Item>

            {this.props.loading?
              <View>
                <Spinner/>
              </View>
              :
              <View>
                <Button
                  disabled = {submitting}
                  underlayColor = '#ff8c31'
                  onPress={handleSubmit(this.handleFormSubmit)}
                  buttonStyle ={{alignSelf: 'center', backgroundColor: '#1e9c98'}}
                  textStyle = {{color: '#fff'}}
                  >REGISTER
                </Button>

                <TouchableOpacity
                  onPress = {() => Actions.login()}>
                  <Text style = {{  height: 30,fontSize: 11, color: '#33cccc',}}> Already have an account? Login</Text>
                </TouchableOpacity>
              </View>
            }

          </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}

Registration.propTypes = propTypes;

Registration = reduxForm({
  form: 'signup',
  validate: syncValidate,
  asyncValidate: asyncValidate,
  asyncBlurFields: ['email','password'],
  shouldAsyncValidate: (params) => {
    return params.trigger === 'blur' && params.syncValidationPasses; // do not async validate on submit
  }
})(Registration)

export default Registration;
