'use strict';

import React, { Component, PropTypes } from 'react';
import {View, Text, TextInput,StyleSheet, Dimensions} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import * as common from '../../styles/commonstyles';


const propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  multiline: PropTypes.bool,
  containerStyle: PropTypes.object,
};

const defaultProps = {
  secureTextEntry: false,
  multiline: false,
  containerStyle: {},
};

//Custom input with borders
const TextInputWithBorders = (props) => {
  console.log("The props provided to the input are as follows:")
  console.log(props);

  const {inputContainer, InputText, errorText } = styles

  const {input,
    meta: {touched, error, warning},
    placeholder,
    secureTextEntry,
    multiline,
    containerStyle, ...otherProps} = props

  return(
    <View style={[inputContainer, containerStyle]}>
      <TextInput
        {...input}
        autoCapitalize="none"
        underlineColorAndroid={'transparent'}
        autoCorrect={false}
        placeholderTextColor= 'white'
        onBlur={val => input.onBlur(val)}
        onFocus={input.onFocus}
        value = {input.val}
        style = {common.textinputWithBorders}>
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

  const {inputContainer, InputText, errorText } = styles

  const {input,
    meta: {touched, error, warning},
    placeholder,
    secureTextEntry,
    multiline,
    containerStyle, ...otherProps} = props

  return(

    <View>
      <TextInput
        {...otherProps}
        autoCapitalize="none"
        underlineColorAndroid={'transparent'}
        autoCorrect={false}
        placeholderTextColor= 'white'
        onBlur={val => input.onBlur(val)}
        style = {common.textinputWithBorders}>
      </TextInput>
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

  },
  InputText: {
    /*color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,*/
  },
  kohanaLabelStyle:{
    //color: '#91627b',
    color: '#1e9c98',
    fontFamily: 'sans-serif-thin',
  },
  errorText: {
    color: '#ff5964',
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
