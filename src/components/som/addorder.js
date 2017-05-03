//@flow
import React, { Component, PropTypes } from 'react';
import {View, Text,TextInput,Picker, Dimensions,
  StyleSheet, TouchableOpacity, TouchableHighlight,
  Image, Alert, ScrollView, ListView} from 'react-native';
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

class SalesOrder extends Component {
  constructor(props){
    super(props);

    let initial_result = Array.apply(null, Array(3)).map(String.prototype.valueOf,"null")

    this.state = {
      displayTable: false,
      onEmptySearch: true,
      results: [],
      input: '',
      showSearchResults: false,

    }

    //this.onSearch = debounce(this.onSearch, 500);
  }

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
            placeholder={'Search...'}
            autoCorrect={false}
            padding={5}
            returnKeyType={'search'}
            value = {this.state.input}
            onFocus={() => {}}
            />
        </View>
        {/* Order Form */}
        <View style = {[styles.orderForm]}>
          <Item style = {styles.boxContainer}>
            <TouchableHighlight
              underlayColor= {'#ff8c31'}
              onPress={() => {}}
              style={[styles.button]}>
                <Icon
                  name = 'plus-circle'
                  size = {21}
                  color = {'white'}
                  >
                  <Text style={[common.buttonText, {color: 'white'}]}> Add New Order </Text>
                </Icon>
            </TouchableHighlight>
          </Item>
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

          <Item style = {styles.boxContainer}>
            <TextInput
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              autoCorrect={false}
              placeholderTextColor= '#cbccd0'
              placeholder="Address"
              style = {[common.textInputWithoutBorders]}>
            </TextInput>
          </Item>

          <View style = {[styles.boxContainer, styles.productContainer]}>
            <Item style = {styles.product}>
              <TextInput
                autoCapitalize="none"
                underlineColorAndroid={'transparent'}
                autoCorrect={false}
                placeholderTextColor= '#cbccd0'
                placeholder="Product Code"
                style = {[common.textInputWithoutBorders, {width: width * 0.45}]}>
              </TextInput>
            </Item>

            <Item style = {styles.quantity}>
              <TextInput
                autoCapitalize="none"
                underlineColorAndroid={'transparent'}
                autoCorrect={false}
                placeholderTextColor= '#cbccd0'
                placeholder="Quantity"
                style = {[common.textInputWithoutBorders, {width: width * 0.2}]}>
              </TextInput>
            </Item>
          </View>

          <Item style = {{flexDirection: 'row', justifyContent: 'center',}}>
            <TouchableHighlight
              underlayColor= {'#ff8c31'}
              onPress={() => {this.submitOrderForm()}}
              style={[styles.button,{width: width * 0.3} ]}>
                <Text style={[common.buttonText, {color: 'white'}]}> SAVE </Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor= {'#ff8c31'}
              onPress={() => {}}
              style={[styles.button, {backgroundColor: 'transparent', width: width * 0.3}]}>
                <Text style={[common.buttonText]}> CANCEL </Text>
            </TouchableHighlight>
          </Item>

        </View>

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

        {this.state.displayTable ?
          <View style = {[styles.table]}>
            <ScrollView>
              <ProductTable/>
            </ScrollView>
          </View>
          :
          <View/>
        }
        <View style = {[styles.submitButton]}>
          <Button
            underlayColor = '#ff8c31'
            onPress={() => {Actions.sompayment()}}
            buttonStyle = {{borderRadius: 0}}> NEXT
          </Button>
        </View>
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
    flex: 0.1,


  },
  orderForm:{
    flex: 0.4,
    //borderColor: '#1e9c98',
    //borderWidth: 3,
    marginLeft: 10,
    marginRight: 10,
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
  },
  boxContainer:{
    flex: 1,
    alignItems: 'center',
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
  product:{

  },
  quantity:{

  },
  resultsdisplay:{
    borderWidth: 3,
    borderColor: '#1e9c98',
    backgroundColor: '#eb9708',
    position: 'absolute',
    top: height * 0.255,
    left: 20,
    width: width * 0.89,
    padding: 15,

    //height: 20,
  },
}
export default SalesOrder
