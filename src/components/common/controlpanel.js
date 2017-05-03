import React, {PropTypes} from 'react';
import {StyleSheet, Text, View, ScrollView, ListView, TouchableOpacity} from "react-native";
import Button from './button';
import { Actions } from 'react-native-router-flux';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#151f0b',
    borderWidth: 2,
    borderColor: '#151f0b',
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    //padding: 10,
  },
  header:{
    backgroundColor: '#060902',
    padding: 5,
  },
  subheading:{
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    //borderWidth: 4,
    //borderColor: '#060902',
    //borderColor:'#1e9c98',

    //borderRadius: 20,
    //padding: 5,*/
    //paddingLeft: 15,
    //backgroundColor: '#060902',

    //'#ff8c31'
  },
  som:{
    flex: 0.5,
  },
  pom:{
    flex: 0.5,
  },
  inventory:{

  },
  reporting:{

  },
});

const ControlPanel = (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={[styles.container, props.sceneStyle ]}>
      <ScrollView>
          <View style = {styles.som}>
            <View style={styles.header}>
              <Text style = {{color: '#1e9c98', fontFamily: 'sans-serif-light'}}> SALES MANAGEMENT </Text>
            </View>

            <TouchableOpacity onPress = {() => {drawer.close(); Actions.addorder();}}>
              <View
                style = {styles.subheading}>
                <Text style={{fontFamily:'sans-serif-light', color: 'white'}}> Add Sales Order </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {drawer.close(); Actions.editorder();}}>
              <View
                style = {styles.subheading}>
                <Text style={{fontFamily:'sans-serif-light', color: 'white'}}> Edit Sales Order </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {drawer.close(); Actions.salesordertemplate();}}>
              <View
                style = {styles.subheading}>
                <Text style={{fontFamily:'sans-serif-light', color: 'white'}}> Sales Template </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style = {styles.pom}>
            <View style={styles.header}>
              <Text style = {{color: '#1e9c98', fontFamily: 'sans-serif-light'}}> PURCHASE MANAGEMENT </Text>
            </View>

            <TouchableOpacity onPress = {() => {drawer.close(); Actions.login();}}>
              <View
                style = {styles.subheading}>
                <Text style={{fontFamily:'sans-serif-light', color: 'white'}}> Add Purchase Order </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {drawer.close(); Actions.login();}}>
              <View
                style = {styles.subheading}>
                <Text style={{fontFamily:'sans-serif-light', color: 'white'}}> Edit Purchase Order  </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {drawer.close(); Actions.login();}}>
              <View
                style = {styles.subheading}>
                <Text style={{fontFamily:'sans-serif-light', color: 'white'}}>  Purchasing Template  </Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style = {styles.inventory}>
            <View style={styles.header}>
              <Text style = {{color: '#1e9c98', fontFamily: 'sans-serif-light'}}> INVENTORY MANAGEMENT </Text>
            </View>

            <TouchableOpacity onPress = {() => {drawer.close(); Actions.login();}}>
              <View
                style = {styles.subheading}>
                <Text style={{fontFamily:'sans-serif-light', color: 'white'}}>  Inventory List  </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style = {styles.reporting}>
            <View style={styles.header}>
              <Text style = {{color: '#1e9c98', fontFamily: 'sans-serif-light'}}> REPORTING & ANALYSIS </Text>
            </View>

            <TouchableOpacity onPress = {() => {drawer.close(); Actions.login();}}>
              <View
                style = {styles.subheading}>
                <Text style={{fontFamily:'sans-serif-light', color: 'white'}}>  Income Statement </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {drawer.close(); Actions.login();}}>
              <View
                style = {styles.subheading}>
                <Text style={{fontFamily:'sans-serif-light', color: 'white'}}>  Balance Sheet  </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {drawer.close(); Actions.login();}}>
              <View
                style = {styles.subheading}>
                <Text style={{fontFamily:'sans-serif-light', color: 'white'}}>  Trend Analysis  </Text>
              </View>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
};

ControlPanel.contextTypes = contextTypes;
ControlPanel.propTypes = propTypes;

export default ControlPanel;
