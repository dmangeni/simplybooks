'use strict';

import React, {PropTypes } from 'react';
import { TextInput, View, Text,StyleSheet} from 'react-native';
import { Hideo } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import * as loginstyles from '../../styles/loginstyles';

const propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  multiline: PropTypes.bool,
  containerStyle: PropTypes.object,
};

const defaultProps = {
  secureTextEntry: false,
  multiline: false,
  containerStyle: {},
};

const HideoInput = (props) => {
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
      <Hideo
        {...otherProps}
        iconClass={FontAwesomeIcon}
        inputStyle = {loginstyles.hideoTextBox}
        iconBackgroundColor={'#006c68'}
        placeholder = {props.placeholder}
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


const styles = {
  inputContainer: {
    flex: 1,
    margin: 10,
  },
  InputText: {

  },
  errorText: {
    //color: '#ff5964',
    color: '#ff8c31',
    fontFamily: 'sans-serif-light',
  },
};

HideoInput.defaultProps = defaultProps;
HideoInput.propTypes = propTypes;

export default HideoInput
