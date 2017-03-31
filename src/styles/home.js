import { Platform, StyleSheet, Dimensions } from 'react-native';


let {height, width} = Dimensions.get('window');

const appcontainerstyles =  StyleSheet.create({
  loginform:{
    flex: 2,
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  quicklinksbox:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start', //cross-axis
  },
  links:{
    height: 25,
    fontSize: 10,
    color: '#33cccc',
  },
  loginBackgroundImage:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }

});

module.exports = appcontainerstyles;
