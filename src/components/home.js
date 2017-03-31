//@flow
import React, { Component } from 'react';
import
{ AppRegistry, View, Text, TextInput,
  StyleSheet,TouchableHighlight, Image, Alert} from 'react-native';
import * as common from '../styles/commonstyles';
import * as homestyles from '../styles/home';
import ActionButton from './button';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount(){
    this.props.setDatabase();
  }

  login(user){
    this.props.login(user);
  }
  render(){
    return (
      <View style = {common.container}>
        {/*<Image
          source = {require('../gallery/image4.jpeg')}
          style = {homestyles.loginBackgroundImage}>*/}
        <View style = {[common.boxContainer, homestyles.loginform]}>
          <TextInput
            autoCapitalize="none"
            underlineColorAndroid={'transparent'}
            autoCorrect={false}
            placeholder="Username"
            placeholderTextColor="#006c68"
            onChangeText={(username) => this.setState({username}) }
            value = {this.state.username}
            style = {common.textbox}>
          </TextInput>
          <TextInput
            autoCapitalize="none"
            underlineColorAndroid={'transparent'}
            autoCorrect={false}
            placeholder="Password"
            placeholderTextColor="#006c68"
            onChangeText={(password) => this.setState({password})}
            value = {this.state.password}
            style = {common.textbox}>
          </TextInput>
          <ActionButton
          onPress={(currentUser = {
            username: this.state.username,
            password: this.state.password
          }) => this.login(currentUser)}
          title = "LOG IN"/>
        </View>
        <View style = {[common.boxContainer, homestyles.quicklinksbox]}>
         <Text style = {homestyles.links}>Forgot Password?  | </Text>
         <Text style={homestyles.links}>Create a new account</Text>
        </View>
        {/*}{this.props.children}</Image>*/}
      </View>
    );
  }
}
export default Home
