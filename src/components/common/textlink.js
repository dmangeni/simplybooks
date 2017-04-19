'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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


const TextLink = ({onPress,children,buttonStyle, textStyle}) => {

  const {container,text} = styles;

    return (
      <View style = {styles.container} onPress ={onPress}>
        <TouchableOpacity>
          <Text style={[text, textStyle]}> {children}</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = {
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    //fontSize: 25,
    /*fontSize: 60,
    alignSelf: 'center',
    color: '#fff',

    /*fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,*/
  },
};

TextLink.propTypes = propTypes;
TextLink.defaultProps = defaultProps;

module.exports = TextLink;
