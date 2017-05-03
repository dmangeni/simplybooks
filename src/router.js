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
import SomPayment from './components/som/sompayment';

import SearchBarContainer from './components/common/search';
import MenuButton from './components/common/menu';
import NavigationDrawer from './components/common/navigationDrawer';
import { SearchIcon } from './components/common/search';


const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  }
}

const RouterComponent = () => (

  <Router
    createReducer={reducerCreate}
    sceneStyle={{ paddingTop: 0, backgroundColor: '#edecec' }}
    navigationBarStyle={styles.navigationBarStyle}
    titleStyle = {styles.titlestyle}
    leftButtonIconStyle ={styles.backbutton}

  >
    <Scene key = "modal" component = {Modal}>
      <Scene key='root' hideNavBar hideTabBar>

          <Scene key = "login"
            component = {Login}
            hideNavBar
            initial
            />

          <Scene key = "registration"
            component = {Registration}
            hideNavBar
          />

          <Scene key = "hometabs" component = {NavigationDrawer}>
            <Scene key = 'home' tabs = {true}
              hideNavBar
              tabBarStyle={styles.homeTabBarStyle}
              tabBarIconContainerStyle = {styles.tabBarIconContainerStyle}
              >
              <Scene key="addorder"
                icon={TabIcon}
                component={SalesOrder}
                renderLeftButton = {() => <MenuButton/>}
                titleWrapperStyle = {styles.titleWrapper}
                title = "Add Order"/>

              <Scene key="editorder"
                icon={TabIcon}
                component={EditOrder}
                renderLeftButton = {() => <MenuButton/>}
                titleWrapperStyle = {styles.titleWrapper}
                title = "Edit Order"
                initial/>

              <Scene key="salesordertemplate"
                icon={TabIcon}
                component={SalesOrder}
                renderLeftButton = {() => <MenuButton/>}
                titleWrapperStyle = {styles.titleWrapper}
                title = 'Template'/>
            </Scene>
          </Scene>


          <Scene key="sompayment"
            component={SomPayment}
            title ="Payment"
            hideNavBar = {false}
            />

          <Scene key = "passwordResetModal"
            component = {PasswordResetModal}
            title = "PASSWORD RECOVERY"
            hideNavBar = {false}
          />

        </Scene>
    </Scene>
  </Router>
)

let { height, width} = Dimensions.get('window');

const styles = {
  navigationBarStyle: {

    borderBottomWidth: 0,
    paddingTop: 0,



    /*backgroundColor: '#fff',
    backgroundColor: '#edecec',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,*/
  },
  homeNavigationBarStyle:{
    backgroundColor: 'red',
  },
  tabBarIconContainerStyle:{
    borderWidth : .5,
    borderColor    : '#b7b7b7',
  },
  titleWrapper:{
    //borderWidth : .5,
    //borderColor    : '#b7b7b7',
    top: 10,
    left: width * 0.2,
    //right: 0,
    width: width * 0.5,
  },
  homeTabBarStyle:{
    //borderTopWidth : .5,
    paddingLeft: 15,
    paddingRight: 15,
    top: 55,
    //borderColor    : '#b7b7b7',
    //backgroundColor: 'white',
    opacity        : 1
  },
  tabBarSelectedItemStyle:{
    backgroundColor: 'red',
  },
  backbutton:{
    tintColor: '#1e9c98',
  },
  titlestyle:{
    fontSize:20,
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
