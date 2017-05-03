//@flow
import React, { Component, PropTypes } from 'react';
import {View, Text,TextInput,Picker, Dimensions,
  StyleSheet, TouchableOpacity, DatePickerIOS, TouchableWithoutFeedback,
  DatePickerAndroid, Alert, ScrollView, Platform} from 'react-native';
import * as common from '../../styles/commonstyles';
import {textInputWithBorders} from '../common/input';
import Item from '../common/item';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../common/button';

let DatePicker = Platform.OS === 'ios' ? DatePickerIOS : DatePickerAndroid;


class SomPayment extends Component {
  constructor(props){
    super(props);

    let initial_result = Array.apply(null, Array(3)).map(String.prototype.valueOf,"null")

    this.state = {
      selectedpayment: 'selected',
      mode: Picker.MODE_DIALOG,
      defaultDate: new Date(2020, 4, 5),
      defaultText: 'Pick a date',
    }

    //this.onSearch = debounce(this.onSearch, 500);
  }


  render(){
    return (
      <View style = {styles.container}>
        <View style = {styles.amount}>
          <Text style = {{color: 'white', fontFamily: 'sans-serif-light', fontSize: 25,}}> $ 1300 </Text>
        </View>
        <View style = {[styles.paymentdropdown]}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.selectedpayment}
            onValueChange={(selectedpayment) => this.setState({selectedpayment})}
            mode="dropdown"
            >
            <Picker.Item color = 'white' label="Select Payment Method" value="null" />
            <Picker.Item color = 'black' label="Cash" value="Cash" />
            <Picker.Item color = 'black' label="Credit Card" value="CreditCard" />
            <Picker.Item color = 'black' label="MPESA" value="MPESA" />
          </Picker>
        </View>

        {/* Order Form */}
        <View style = {[styles.creditcardform]}>
          <View style = {[styles.boxContainer, styles.cardicons]}>
            <Icon
              name = 'cc-discover'
              size = {30}
              color = {'white'}
              style = {{margin: 5}}
              >
            </Icon>

            <Icon
              name = 'cc-visa'
              size = {30}
              color = {'white'}
              style = {{margin: 5}}
              >
            </Icon>

            <Icon
              name = 'cc-mastercard'
              size = {30}
              color = {'white'}
              style = {{margin: 5}}
              >
            </Icon>

            <Icon
              name = 'cc-stripe'
              size = {30}
              color = {'white'}
              style = {{margin: 5}}
              >
            </Icon>

          </View>
          <Item style = {styles.boxContainer}>
            <TextInput
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              autoCorrect={false}
              placeholderTextColor= '#cbccd0'
              placeholder="Name on Card"
              style = {[common.textInputWithoutBorders]}>
            </TextInput>
          </Item>

          <Item style = {styles.boxContainer}>
            <TextInput
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              autoCorrect={false}
              placeholderTextColor= '#cbccd0'
              placeholder="Card Number"
              style = {[common.textInputWithoutBorders]}>
            </TextInput>
          </Item>

          <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Item style = {{flex: 0.6, paddingLeft: 16,}}>
              <Text style = {{color: '#1e9c98'}}>Expiry Date </Text>
            </Item>

            <Item style = {{flex: 0.4}}>
              <Text style={{color: '#1e9c98'}}> Security Code </Text>
            </Item>
          </View>

          <View style = {[styles.boxContainer, styles.productContainer]}>
            <Item style = {styles.cardexpirydate}>
              <TextInput
                autoCapitalize="none"
                underlineColorAndroid={'transparent'}
                autoCorrect={false}
                placeholderTextColor= '#cbccd0'
                placeholder="MM"
                style = {[common.textInputWithoutBorders, {width: width * 0.20}]}>
              </TextInput>
            </Item>

            <Item style = {styles.cardexpirydate}>
              <TextInput
                autoCapitalize="none"
                underlineColorAndroid={'transparent'}
                autoCorrect={false}
                placeholderTextColor= '#cbccd0'
                placeholder="YYYY"
                style = {[common.textInputWithoutBorders, {width: width * 0.20}]}>
              </TextInput>
            </Item>

            <Item style = {styles.securitycode}>
              <TextInput
                autoCapitalize="none"
                underlineColorAndroid={'transparent'}
                autoCorrect={false}
                placeholderTextColor= '#cbccd0'
                placeholder="CVS"
                style = {[common.textInputWithoutBorders, {width: width * 0.2}]}>
              </TextInput>
            </Item>
          </View>
        </View>


        <View style = {[styles.submitButton]}>
          <Button
            underlayColor = '#ff8c31'
            onPress={() => { Alert.alert('Order Confirmation',
             'Your order has been confirmed!.',
            [{text: 'OK', onPress: () => {}},]) }}
            buttonStyle = {{borderRadius: 20, backgroundColor: '#1e9c98', borderColor:'#ff8c31'}}
            textStyle = {{color: 'white'}}> SUBMIT
          </Button>
        </View>
      </View>
    )
  }
}

let {height, width} = Dimensions.get('window');

const styles = {
  container: {
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    backgroundColor:'#162f38',
  },
  amount:{
    alignItems:'flex-end',
    margin: 10,
  },
  paymentdropdown: {
    flex: 0.05,
    alignItems: 'center',
    //borderColor: '#1e9c98',
    //borderWidth: 2,
    //borderRadius: 2,
    width: width * 0.7,
    //backgroundColor: '#1e9c98',
    marginLeft: width * 0.1,
    marginRight: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor:'#1e9c98',

  },
  picker:{
    width: width * 0.5,
    borderColor: '#1e9c98',
    borderWidth: 3,
  },
  creditcardform:{
    flex: 0.3,
    //borderColor: '#1e9c98',
    //borderWidth: 3,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#1e404d',
  },
  cardicons:{
    flexDirection:'row',
    padding: 10,
    justifyContent: 'center',
  },
  submitButton:{
    flex: 0.1,
    alignItems: 'center',
    marginTop: 10,
  },
  boxContainer:{
    flex: 1,
    alignItems: 'center',
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
  cardexpirydate:{

  },
  securitycode:{

  },
}
export default SomPayment
