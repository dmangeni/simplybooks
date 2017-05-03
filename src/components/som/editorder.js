//@flow
import React, { Component, PropTypes } from 'react';
import {View, Text,TextInput,Picker, Dimensions,
  StyleSheet, TouchableOpacity, TouchableHighlight,
  Image, Alert, ScrollView, ListView, DatePickerAndroid,
  DatePickerIOS, Platform, TouchableWithoutFeedback} from 'react-native';
import * as common from '../../styles/commonstyles';
import {textInputWithBorders} from '../common/input';
import Item from '../common/item';
import SearchBar from 'react-native-material-design-searchbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions, ActionConst } from 'react-native-router-flux';
import ProductTable from './product_table';
import Button from '../common/button';
import { filter, some, includes } from 'lodash/collection';
import { debounce } from 'lodash/function';

//import SearchBar from 'react-native-searchbar';



let DatePicker = (Platform.OS === 'ios') ? DatePickerIOS : DatePickerAndroid

let data = [
  {
    product: 'Tomatoes',
    cost: '12.30',
    purchaseDate:'1/2/2017',
    vendor:'Mama Shiro Distributors',
    in_stock:'10',
  },
  {
    product: 'Cabbage',
    cost: '11.30',
    purchaseDate:'1/3/2017',
    vendor:'Mama Shiro Distributors',
    in_stock:'20',
  },
  {
    product: 'Potatoes',
    cost: '11.30',
    purchaseDate:'1/3/2017',
    vendor:'Mama Shiro Distributors',
    in_stock:'20',
  },
];

class EditOrder extends Component {
  constructor(props){
    super(props);

    let initial_result = Array.apply(null, Array(3)).map(String.prototype.valueOf,"null")

    this.state = {
      displayTable: false,
      onEmptySearch: true,
      results: [],
      input: '',
      showSearchResults: false,
      defaultDate: new Date(2020, 4, 5),
      defaultText: 'Pick Order Date',

    }

    //this.onSearch = debounce(this.onSearch, 500);
  }


  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  _handleResults = (results) => {
    this.setState({ results });
  }

  submitOrderForm = () => {
    this.setState({displayTable: !this.state.displayTable});
    //Handle the data
  }

  depthFirstSearch = (collection, input) => {
    let type = typeof collection;
    // base case(s)
    if (type === 'string' || type === 'number' || type === 'boolean') {
      return includes(collection.toString().toLowerCase(), input.toString().toLowerCase());
    }
    return some(collection, (item) => this.depthFirstSearch(item, input));
  }

  internalSearch = (input) => {
    console.log(input)

    if (input === '') {
      return this.state.onEmptySearch ? data : [];
    }
    return filter(data, (item) => {
      return this.depthFirstSearch(item, input);
    });
  }

  handleResults = (results) => {
    this.setState({ results });
    console.log(results)
  }

  onSearch = (input) => {
    this.setState({ input });
    this.setState({showSearchResults: !this.state.showSearchResults});
    //debounce(() => {
      // use internal search logic (depth first)!
      const results = this.internalSearch(input);
      this.handleResults(results);
    //}, 500)();
  }



  render(){
    return (
      <View style = {styles.container}>
        <View style = {[styles.searchbar]}>
          <SearchBar
            onSearchChange={(input) => this.onSearch(input)}
            height={30}
            placeholder={'Search for Customer or OrderID...'}
            autoCorrect={false}
            padding={5}
            returnKeyType={'search'}
            value = {this.state.input}
            onFocus={() => {}}
            inputStyle = {styles.inputStyle}
            />
        </View>
        {/* Order Form */}
        <View style = {[styles.orderForm]}>
          <Item style = {styles.boxContainer}>
            <TextInput
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              autoCorrect={false}
              placeholderTextColor= '#cbccd0'
              placeholder="Name of Vendor"
              style = {[common.textInputWithoutBorders]}>
            </TextInput>
          </Item>

          <Item style = {[styles.boxContainer, styles.orderDate]}>
            <TouchableWithoutFeedback
              onPress={this.showPicker.bind(this, 'default', {date: this.state.defaultDate, mode: 'date'})}>
              <View>
                <Text style={{color: 'white', fontFamily: 'sans-serif-light',}}>{this.state.defaultText}</Text>
              </View>
            </TouchableWithoutFeedback>
            <Icon
              name = 'calendar'
              size = {21}
              color = {'white'}
              style = {{marginLeft: 10,}}
              />
          </Item>

          <Item style = {styles.boxContainer}>
            <TextInput
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              autoCorrect={false}
              placeholderTextColor= '#cbccd0'
              placeholder="Order ID"
              style = {[common.textInputWithoutBorders]}>
            </TextInput>
          </Item>
        </View>

        {this.state.displayTable ?
          <View style = {[styles.table]}>
            <ScrollView>
              <ProductTable/>
            </ScrollView>
          </View>
          :
          <View/>
        }

        {this.state.showSearchResults?
            <View style = {styles.resultsdisplay}>
              {
                this.state.results.map((result, i) => {
                  return (
                      <Text key={i}>
                        {typeof result === 'object' && !(result instanceof Array) ? result.product : ''}
                      </Text>
                 );
               })
              }
            </View>
            :
            <View/>
        }
        <Item style = {[styles.submitButton]}>
          <Button
            underlayColor = '#ff8c31'
            onPress={() => {}}
            buttonStyle = {[styles.button,{borderRadius: 0, width: width * 0.5}]}
            textStyle = {[common.buttonText, {color: 'white'}]}> UPDATE ORDER
          </Button>

        </Item>
      </View>
    )
  }
}

let {height, width} = Dimensions.get('window');


const styles = {
  container: {
    paddingTop: 120,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
  },
  searchbar: {
    flex: 0.02,
    //borderColor: '#1e9c98',
    //borderWidth: 3,
  },
  orderForm:{
    flex: 0.07,
    borderColor: '#1e9c98',
    borderWidth: 3,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor:'#1e9c98',
    elevation: 10,
  },
  orderDate:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //borderColor: 'white',
    //borderWidth: 1,
    width: width * 0.5,
    alignSelf: 'center',
    //backgroundColor: 'white',
  },
  table:{
    flex: 0.3,
    marginTop: 10,
    //borderColor: '#1e9c98',
    //borderWidth: 3,
  },
  submitButton:{
    flex: 0.1,
    alignItems: 'center',
    marginTop: 10,
  },
  boxContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    borderRadius: 10,
    //padding: 10,
  },
  productContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button:{
    width: width * .4,
    margin: 5,
    borderWidth: 2,
    borderColor:'#1e9c98',
    padding: 5,
    backgroundColor:'#1e9c98',
  },
  resultsdisplay:{
    borderWidth: 3,
    borderColor: '#1e9c98',
    backgroundColor: '#eb9708',
    position: 'absolute',
    top: height * 0.260,
    left: 20,
    width: width * 0.89,
    padding: 15,

    //height: 20,
  },
}
export default EditOrder
