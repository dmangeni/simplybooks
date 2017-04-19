import { Platform, StyleSheet, Dimensions } from 'react-native';


let {height, width} = Dimensions.get('window');

const constants = {
  actionColor: '#1e9c98',
};

const loginstyles =  StyleSheet.create({
  hideoTextBox:{
    borderWidth: 2,
    borderColor:'#006c68',
    //width: width * .5,
    //margin: 10,
  },
});

module.exports = loginstyles;
module.exports.constants = constants;
