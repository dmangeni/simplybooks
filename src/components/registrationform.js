import React, { Component } from 'react';
import { AppRegistry, View, Text,StyleSheet,PixelRatio} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal';
import { Text_Input, Text_Input_With_Borders, Text_Input_With_Icons } from './custom';
import * as registrationstyles from '../styles/registrationform';
import * as common from '../styles/commonstyles';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class RegistrationForm extends Component {
  constructor(props) {
    super(props)

    let userLocaleCountryCode = DeviceInfo.getDeviceCountry();
    console.log(userLocaleCountryCode);
    const userCountryData = getAllCountries()
      .filter((country) => NORTH_AMERICA.includes(country.cca2))
      .filter((country) => country.cca2 === userLocaleCountryCode).pop();

    let callingCode = userCountryData.callingCode;

    let cca2 = userLocaleCountryCode;
    if (!cca2 || !userCountryData) {
      cca2 = 'US';
      callingCode = '1';
    }

    this.state = {
      cca2,
      callingCode
    };

  }

  render() {
    return(
      <View style = {registrationstyles.container}>
        <View style = {registrationstyles.regform}>

          {/*Personal Details */}
          <View style = {registrationstyles.personal}>

            <View style = {registrationstyles.headerView}>
                <Text style = {registrationstyles.headerText}>PERSONAL DETAILS</Text>
            </View>


            <View style={registrationstyles.personalcontent}>

              <View style = {registrationstyles.inputWithIcons}>
                <Icon name = "user" style = {registrationstyles.icon}/>
                <Text_Input_With_Borders placeholder = "Email Address"/>
              </View>

              <View style={registrationstyles.inputWithIcons}>
                  <Icon name = "key" style = {registrationstyles.icon}/>
                  <Text_Input_With_Borders placeholder = "Password"/>
              </View>
            </View>
          </View>

        {/*Business Details*/}
        <View style={registrationstyles.business}>
          <View style = {registrationstyles.headerView}>
              <Text style = {registrationstyles.headerText}>BUSINESS DETAILS</Text>
          </View>

          <View style={registrationstyles.personalcontent}>
            <View style = {registrationstyles.inputWithIcons}>
              <Icon name = "home" style = {registrationstyles.icon}/>
              <Text_Input_With_Borders placeholder = "Name of Business"/>
            </View>

            {/*Country Picker*/}
            <View style = {registrationstyles.inputWithIcons}>
              <CountryPicker
                 countryList={NORTH_AMERICA}
                 onChange={(value)=> {
                   this.setState({cca2: value.cca2, callingCode: value.callingCode});
                 }}
                 cca2={this.state.cca2}
                 translation='eng'
                  />
                 {this.state.country &&
                  <Text style={registrationstyles.data}>
                    {JSON.stringify(this.state.country, null, 2)}
                  </Text>}
            </View>

              {/*Street Address*/}
            <View style = {registrationstyles.inputWithIcons}>
              <Icon name = "road" style = {registrationstyles.icon}/>
              <Text_Input_With_Borders placeholder = "Street Address"/>
            </View>

            {/* State*/}
            <View style = {registrationstyles.inputWithIcons}>
              <Icon name = "map-marker" style = {registrationstyles.icon}/>
              <Text_Input_With_Borders placeholder = "Zipcode"/>
            </View>

          </View>
        </View>
        </View>
      </View>
    );
  }
}

const NORTH_AMERICA = ['CA', 'MX', 'US', 'KE', 'UG', 'IN', 'NA', 'ZW', 'ZM','SZ'];
