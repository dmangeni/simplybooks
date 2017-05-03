import React from 'react';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import {StyleSheet,Text,View, Dimensions, Platform} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';

import TabIcon from './components/tabicon';
import Login from './containers/login';
import Registration from './containers/registration';
import PasswordResetModal from './containers/passwordreset';
import SalesOrder from './components/som/addorder';
import EditOrder from './components/som/editorder';
import SalesOrderTemplate from './components/som/salestemplate';

import SearchBarContainer from './components/common/searchbar';
import MenuButton from './components/common/menu';
import NavigationDrawer from './components/common/navigationDrawer';


const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  }
}

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 0, backgroundColor: '#edecec' }}
    navigationBarStyle={styles.navigationBarStyle}
    titleStyle = {styles.titlestyle}
    leftButtonIconStyle ={styles.backbutton}

  >
    <Scene key = "modal" component = {Modal}>
      <Scene key='root' hideNavBar hideTabBar>

          <Scene key = "drawer" component = {NavigationDrawer}>
            <Scene key = 'hometabs' tabs = {true}
              hideNavBar
              tabBarStyle={styles.homeTabBarStyle}
              initial ={false}>

              <Scene key="addorder"
                icon={TabIcon}
                component={SalesOrder}
                renderLeftButton = {() => <MenuButton/>}
                titleWrapperStyle = {styles.titleWrapper}
                title = "Add Order"/>

              <Scene key="editorder"
                icon={TabIcon}
                component={SalesOrder}
                renderLeftButton = {() => <MenuButton/>}
                titleWrapperStyle = {styles.titleWrapper}
                title = "Edit Order"/>

              <Scene key="salesordertemplate"
                icon={TabIcon}
                component={SalesOrder}
                renderLeftButton = {() => <MenuButton/>}
                titleWrapperStyle = {styles.titleWrapper}
                title = 'Template'/>
              </Scene>

              <Scene key="purchase" title = "PURCHASES" icon={TabIcon}>
                <Scene
                  key="addOrder"
                  component={SalesOrder}
                  renderLeftButton = {() => <MenuButton/>}
                  titleWrapperStyle = {styles.titleWrapper}
                  title = "PURCHASES"
                  />
                <Scene
                  key="EditOrder"
                  component={EditOrder}
                  title="Edit Order"
                  />

                <Scene
                  key="purchaseordertemplate"
                  component={SalesOrderTemplate}
                  title="Template" />
              </Scene>

            </Scene>
          </Scene>

        </Scene>
    </Scene>
  </Router>
)

let {height, width} = Dimensions.get('window');

const styles = {
  navigationBarStyle: {

    borderBottomWidth: 0,
    paddingTop: 0,
    //height: 65,


    /*backgroundColor: '#fff',
    backgroundColor: '#edecec',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,*/
  },
  homeNavigationBarStyle:{
    backgroundColor: 'red',
  },
  titleWrapper:{
    borderWidth : .5,
    borderColor    : '#b7b7b7',
    top: 10,
    left: width * 0.2,
    //right: 0,
    width: width * 0.5,
  },
  homeTabBarStyle:{
    borderTopWidth : .5,
    borderColor    : '#b7b7b7',
    backgroundColor: 'white',
    opacity        : 1
  },
  tabBarSelectedItemStyle:{
    backgroundColor: 'red',
  },
  backbutton:{
    tintColor: '#1e9c98',
  },
  titlestyle:{
    fontSize:15,
    color: '#1e9c98',
  }
};

export default RouterComponent;

/*import React from 'react';
import {Actions, Router, Scene } from 'react-native-router-flux'

import Login from './containers/login';
import Registration from './containers/registration';

const Scenes = Actions.create(
  <Scene key='root'>
    <Scene key="login" component={Login} hideNavBar={true}initial ={true} />
    <Scene key="registration" component={Registration} hideNavBar={true}/>
  </Scene>
)
export default Scenes;

renderRightButton = {() => <SearchBarContainer/>}
*/






import React, {Component} from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //marginTop: 20,
  },
  header:{
    /*height: 40,
    backgroundColor: '#ffffff',
    borderColor:'#1b5555',
    borderWidth: 2,
    marginBottom: 1,*/
    borderWidth:2,
    margin: 2,
    borderColor: 'black',
    height: 40,
    width: 100,
  },
  row:{
    backgroundColor: '#CCC',
    margin: 5,
    width: 70,
    height: 50
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

/*const ROWS_IN_DATA_SOURCE = 10;
const dataSource = [];

for (let i=0; i<ROWS_IN_DATA_SOURCE; i++){
  dataSource.push(`This is the data for row # ${i+1}`)
}*/

class ProductTable extends Component {
  constructor(props) {
    super(props);

    let headers = ['Product Name', 'Price', 'Quantity', 'Total']


    const ds = new ListView.DataSource({
      dataBlob: {},
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData: this.header,
    });
    //let data = Array.apply(null, {length: 10}).map(Number.call, Number);

    this.state = {
      dataSource: ds.cloneWithRows(headers),
    };
  }


  _renderRow = (rowData) =>{
    return (
      <Text style={styles.rowText}>{rowData}</Text>
    );
  }

  _renderSeparator = (rowId) => {
    return (
      <View key = {rowId} style = {styles.separator}/>
    )
  }

  _renderHeader = (headerData) => {
    return (
      <View style = {styles.header}>
        <Text>{headerData}</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView
        contentContainerStyle = {styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={(headerData) => this._renderHeader(headerData)}

      />
    );
  }
}
export default ProductTable;



//@flow
import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Text, TextInput,StyleSheet, Image, Picker, ScrollView} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Field, reduxForm } from 'redux-form';
import * as common from '../styles/commonstyles';
import * as registrationstyles from '../styles/registrationform';
import {syncValidate, asyncValidate, submit} from '../actions/validate';
import { TextInputWithBorders, KohanaInput } from './common/input';
import Button from './common/button';
import Spinner from './common/spinner';
import Container from './common/container';
import Item from './common/item';


//Custom input component
const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  //clearState: PropTypes.func.isRequired,
  //signUpUser: PropTypes.func.isRequired,
  //authError: PropTypes.string.isRequired,
  //loading: PropTypes.bool.isRequired,
};


class Registration extends Component {
  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(props) {
    const { email, password, business, street, zipcode} = props;

    //Register the user account and Business Details
    this.props.createUser({ email, password});
    this.props.registerBusiness({business, street, zipcode});
  }

  render(){

    const {asyncValidating, handleSubmit, submitting, asyncValidate, validate} = this.props;

    return (
      <View style = {registrationstyles.container}>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style = {registrationstyles.regform}>

          <View style = {[registrationstyles.section, registrationstyles.personal]}>

            <Text style = {registrationstyles.headerText}>ADMIN ACCOUNT DETAILS</Text>

            <Item>
              <Field
                name = 'email'
                component={KohanaInput}
                label = {'Email Address'}
                iconName = {'email'}
                />
            </Item>

            <Item>
              <Field
                name = 'password'
                component={KohanaInput}
                label = {'Password'}
                secureTextEntry
                iconName = {'lock'}
                />
            </Item>

          </View>

          <View style = {[registrationstyles.section, registrationstyles.business]}>
            <Text style={registrationstyles.headerText}>BUSINESS ACCOUNT DETAILS</Text>

            <Item>
              <Field
                name = 'business'
                component={KohanaInput}
                label = {'Name of Business'}
                iconName = {'home'}
                />
            </Item>

            <Item>
              <Field
                name = 'street'
                component={KohanaInput}
                label = {'Street Address'}
                iconName = {'streetview'}
                />
            </Item>

            <Item>
              <Field
                name = 'zipcode'
                component={KohanaInput}
                label = {'Zipcode | Postal Code'}
                iconName = {'satellite'}
                />
            </Item>
          </View>

          {this.props.loading?
            <View>
              <Spinner/>
            </View>
            :
            <View>
              <Button
                disabled = {submitting}
                underlayColor = '#ff8c31'
                onPress={handleSubmit(this.handleFormSubmit)}
                buttonStyle ={{alignSelf: 'center', backgroundColor: '#ff8c31'}}
                >REGISTER
              </Button>
            </View>
          }
        </View>
      </ScrollView>
      </View>
    );
  }
}

Registration.propTypes = propTypes;

Registration = reduxForm({
  form: 'signup',
  validate: syncValidate,
  asyncValidate: asyncValidate,
  asyncBlurFields: ['email','password'],
  shouldAsyncValidate: (params) => {
    return params.trigger === 'blur' && params.syncValidationPasses; // do not async validate on submit
  }
})(Registration)

export default Registration;
