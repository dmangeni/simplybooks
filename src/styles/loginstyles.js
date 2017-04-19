import { Platform, StyleSheet, Dimensions } from 'react-native';


let {height, width} = Dimensions.get('window');

const loginstyles =  StyleSheet.create({
  logoContainer:{
    flex: 0.3,
    alignItems: 'center',
  },
  loginform:{
    padding: 20,
    flex: 0.7,
    flexDirection: 'column',
    alignItems: 'center',
  },
  boxContainer:{
    flex: 1,
    alignItems: 'center',
  },
  loginContainer:{
    flex: 0.2,
  },
  linksContainer:{
    flex: 0.4,
    margin: 10,

    //borderWidth: 2,
    //borderColor: 'black',
  },
  quicklinksbox:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',

    //borderWidth: 2,
    //borderColor: 'black',
  },
  links:{
    height: 30,
    fontSize: 11,
    color: '#33cccc',
  },
  separator:{
    height: 30,
    fontSize: 11,
    color: '#33cccc',
  },
  loginBackgroundImage:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  fieldView:{
    flex: 1,
    minWidth: width * 0.8,
  },
  hideoTextBox:{
    borderWidth: 2,
    borderColor:'#006c68',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'transparent',
  },
  loginbutton:{

  },
});

module.exports = loginstyles;
