'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput} from 'react-native';
import * as common from '../styles/commonstyles';
import constants from '../styles/commonstyles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo, Kohana } from 'react-native-textinput-effects';
import { Field, reduxForm } from 'redux-form';


class Text_Input extends Component {
  render() {
    return (
      <TextInput
        autoCapitalize="none"
        underlineColorAndroid={'transparent'}
        autoCorrect={false}
        placeholder={this.props.placeholder}
        placeholderTextColor="#006c68"
        onChangeText={() => {}}
        value = {this.props.value}
        style = {common.textbox}>
      </TextInput>
    );
  }
}

class Text_Input_With_Icons extends Component {
  render() {
    return (
      <Hideo
      iconClass={FontAwesomeIcon}
      iconName={this.props.iconName}
      iconColor={'white'}
      iconBackgroundColor={'#f2a59d'}
      inputStyle={{color: '#464949'}}
      placeholder={this.props.placeholder}
      />
    );
  }
}

module.exports = {
  Text_Input,Text_Input_With_Icons,
}
