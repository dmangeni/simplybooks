//@flow
import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Text, TextInput,StyleSheet, Image, Picker, ScrollView} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Field, reduxForm } from 'redux-form';
import * as common from '../styles/commonstyles';
import * as registrationstyles from '../styles/registrationform';
import {syncValidate, asyncValidate, submit} from '../actions/validate';
import { TextInputWithBorders, KohanaInput } from './common/input';
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
    const { email, password, business, street, zipcode} = props;

    //Register the user account and Business Details
    this.props.createUser({ email, password});
    this.props.registerBusiness({business, street, zipcode});
  }

  render(){

    const {asyncValidating, handleSubmit, submitting, asyncValidate, validate} = this.props;

    return (
      <View style = {registrationstyles.container}>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style = {registrationstyles.regform}>

          <View style = {[registrationstyles.section, registrationstyles.personal]}>

            <Text style = {registrationstyles.headerText}>ADMIN ACCOUNT DETAILS</Text>

            <Item>
              <Field
                name = 'email'
                component={KohanaInput}
                label = {'Email Address'}
                iconName = {'email'}
                />
            </Item>

            <Item>
              <Field
                name = 'password'
                component={KohanaInput}
                label = {'Password'}
                secureTextEntry
                iconName = {'lock'}
                />
            </Item>

          </View>

          <View style = {[registrationstyles.section, registrationstyles.business]}>
            <Text style={registrationstyles.headerText}>BUSINESS ACCOUNT DETAILS</Text>

            <Item>
              <Field
                name = 'business'
                component={KohanaInput}
                label = {'Name of Business'}
                iconName = {'home'}
                />
            </Item>

            <Item>
              <Field
                name = 'street'
                component={KohanaInput}
                label = {'Street Address'}
                iconName = {'streetview'}
                />
            </Item>

            <Item>
              <Field
                name = 'zipcode'
                component={KohanaInput}
                label = {'Zipcode | Postal Code'}
                iconName = {'satellite'}
                />
            </Item>
          </View>

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
                buttonStyle ={{alignSelf: 'center', backgroundColor: '#ff8c31'}}
                >REGISTER
              </Button>
            </View>
          }
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
