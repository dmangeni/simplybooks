//@flow
import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Text, TextInput,
  StyleSheet,TouchableHighlight, TouchableOpacity,
  Image, Alert, ScrollView} from 'react-native';



class SalesOrderTemplate extends Component {
  constructor(props){
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  render(){
    return (
      <Text>Hey</Text>
    )
  }
}

export default SalesOrderTemplate
