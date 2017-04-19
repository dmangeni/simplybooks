'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import * as common from '../../styles/commonstyles';


const propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

const defaultProps = {
  buttonStyle: {},
  textStyle: {},
};


function Button({onPress, children,underlayColor,buttonStyle, textStyle}){

  const {button, text} = styles;

    return (
        <TouchableHighlight
          underlayColor= {underlayColor}
          onPress={onPress}
          style={[common.button, buttonStyle]}>
          <Text style={[common.buttonText, textStyle]}> {children}</Text>
        </TouchableHighlight>
    );
}

const styles = {
  button: {
    /*flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#039be5',
    borderRadius: 3,
    marginTop: 10,*/
  },
  text: {
    /*alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,*/
  },
};


/*class Button extends Component {

  constructor(props){
      super(props);
  }

  render() {
    return (
      <View style={[common.button,this.props.style]}>
        <TouchableHighlight
          underlayColor= {this.props.underlayColor}
          onPress={() => this.props.onPress()}
          style={[]}>
          <Text style={[common.buttonText, this.props.style]}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
}*/

//module.exports = ActionButton;
export default Button
