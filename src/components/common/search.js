import React, { Component, PropTypes } from 'react';
import { Dimensions, TouchableOpacity, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
//import SearchBar from 'react-native-material-design-searchbar';
import SearchBar from 'react-native-searchbar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchBarContainer extends Component {
  render() {
    return (
        <SearchBar
          onSearchChange={() => console.log('On Focus')}
          height={30}
          onFocus={() => console.log('On Focus')}
          onBlur={() => console.log('On Blur')}
          placeholder={'Search...'}
          autoCorrect={false}
          padding={0}
          placeholderColor = {'black'}
          returnKeyType={'search'}
          inputStyle = {style.inputContainer}
        />
    );
  }
};


export class SearchIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['Hello', 'test', '123', 'bananas', 'chocolate'],
      results: []
    }
  }

  componentDidMount() {
    Actions.refresh({renderLeftButton: this.renderLeftButton, renderRightButton: this.renderRightButton})
  }

  _handleResults = (results) => {
   this.setState({ results });
 }


  render(){
    return (
      <View>
        <TouchableOpacity
          onPress = {() => {this.searchBar.show()}}>
          <Icon name = 'search'
            size = {25}
            color = {'#1e9c98'}/>
        </TouchableOpacity>

        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={this.state.items}
          handleResults={this._handleResults}
          showOnLoad = {false}
          />
      </View>
    )
  }
}

let { height, width } = Dimensions.get('window');
const style = {
  inputContainer:{
    width: width * 0.6,
    borderRadius: 15,
  }
}
