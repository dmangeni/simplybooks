'use strict';

import React, { Component, PropTypes } from 'react';
import {View, Text, TextInput,StyleSheet, Dimensions, Platform} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import * as common from '../../styles/commonstyles';
import Icon from 'react-native-vector-icons/FontAwesome';


const propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  multiline: PropTypes.bool,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
};

const defaultProps = {
  secureTextEntry: false,
  multiline: false,
  containerStyle: {},
};

//Custom input with borders
const TextInputWithBorders = (props) => {
  //console.log("The props provided to the input are as follows:")
  //console.log(props);

  const {inputContainer, InputText, errorText} = styles

  const {input,
    meta: {touched, error, warning},
    placeholder,
    secureTextEntry,
    multiline,
    inputStyle,
    containerStyle, ...otherProps} = props

  return(
    <View style={[inputContainer, containerStyle]}>
      <TextInput
        {...otherProps}
        autoCapitalize="none"
        underlineColorAndroid={'transparent'}
        autoCorrect={false}
        placeholderTextColor= 'white'
        onBlur={val => input.onBlur(val)}
        onFocus={input.onFocus}
        value = {input.val}
        style = {[common.textinputWithBorders, inputStyle]}>
      </TextInput>

     {touched && error &&
       <View>
          <Text style = {errorText}>{error}</Text>
       </View>
     }
    </View>
  );
}


const TextInputWithIcons = (props) => {

  const {inputContainer, InputText, errorText, icon, registrationInput} = styles

  const {input,
    meta: {touched, error, warning},
    placeholder,
    iconName,
    secureTextEntry,
    multiline,
    inputStyle,
    containerStyle, ...otherProps} = props

  return(

    <View style={[inputContainer, containerStyle]}>
      <View style={{flexDirection: 'row'}}>
        <View style = {icon}>
          <Icon name = {iconName} size = {15}/>
        </View>
        <TextInput
          {...input}
          autoCapitalize="none"
          underlineColorAndroid={'transparent'}
          autoCorrect={false}
          placeholderTextColor= 'gray'
          placeholder= {placeholder}
          onBlur={val => input.onBlur(val)}
          style = {[registrationInput,inputStyle]}
          secureTextEntry = {secureTextEntry}>
        </TextInput>
      </View>
      {touched && error &&
        <View>
           <Text style = {errorText}>{error}</Text>
        </View>
      }
    </View>
  );
}


const KohanaInput = (props) => {
  //console.log("The props provided to the input are as follows:")
  //console.log(props);

  const {inputContainer, InputText, errorText } = styles

  const {
    input,
    meta: { touched, error, warning},
    placeholder,
    secureTextEntry,
    multiline,
    containerStyle,
    ...otherProps} = props

  return(
    <View style={[inputContainer, containerStyle]}>
      <Kohana
        {...otherProps}
        iconClass={MaterialsIcon}
        iconColor={'#f4d29a'}
        labelStyle={styles.kohanaLabelStyle}
        inputStyle={{ color: '#91627b' }}
        onBlur={input.onBlur}
        onChangeText = {input.onChange}
        value={input.value}
      />
     {touched && error &&
       <View>
          <Text style = {errorText}>{error}</Text>
       </View>
     }
    </View>
  );
}

let {height, width} = Dimensions.get('window');

const styles = {
  inputContainer: {
    margin: 3,
    //borderColor: 'black',
    //borderWidth: 1,
  },
  InputText: {
    /*color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,*/
  },
  icon: {
    width: width * 0.1,
    justifyContent:'center',
    alignItems: 'center',
    height: 35,
    borderColor: '#ccc2ca',
    borderWidth: 1,

    borderRightColor:'#fff',
  },
  registrationInput:{
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#ccc2ca',
    paddingLeft: 10,
    width: width * .6,
    height: Platform.OS == 'android' ? 35 : 20,
    margin: 0,
    backgroundColor:'white',
    padding: 0,
  },
  kohanaLabelStyle:{
    //color: '#91627b',
    color: '#1e9c98',
    fontFamily: 'sans-serif-thin',
  },
  errorText: {
    color: '#ff5964',
    fontFamily: 'sans-serif-light',
  },
};

TextInputWithBorders.defaultProps = defaultProps;
TextInputWithBorders.propTypes = propTypes;

TextInputWithIcons.defaultProps = defaultProps;
TextInputWithIcons.propTypes = propTypes;

KohanaInput.defaultProps = defaultProps;
KohanaInput.propTypes = propTypes;

module.exports = {
  TextInputWithBorders, TextInputWithIcons,KohanaInput
}
