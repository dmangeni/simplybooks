import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MenuButton extends Component {
  render(){
    return (
      <TouchableOpacity
        onPress = {() => { Actions.refresh({key: 'hometabs', open: value => !value })}}>
        <Icon name = 'bars'
          size = {30}
          color = {'#1e9c98'}/>
      </TouchableOpacity>
    )
  }
}
