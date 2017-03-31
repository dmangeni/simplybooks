'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import * as common from '../styles/commonstyles';
import constants from '../styles/commonstyles';


class ActionButton extends Component {
  render() {
    return (
      <View style={common.button}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={() => this.props.onPress()}>
          <Text style={common.buttonText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

/*class ActionButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => {this.props.onPress()} }
        underlayColor = '#1e9c98'
        style={common.TouchableHighlight}
        >
        <View style = {common.button}>
          <Text style = {common.buttonText}>{this.props.title}</Text>
        </View>
        </TouchableHighlight>
    );
  }
}*/

module.exports = ActionButton;
