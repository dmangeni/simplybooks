import { Platform, StyleSheet, Dimensions } from 'react-native';


let {height, width} = Dimensions.get('window');

const constants = {
  actionColor: '#1e9c98',
};

const commonstyles =  StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  boxContainer:{
    flex: 1,
    alignItems: 'center',
  },
  textbox:{
    borderBottomColor: '#1e9c98',
    borderBottomWidth: 2,
    textAlign: 'center',
    width: width * .7,
    height:40,
    margin: 10,
  },
  textinputWithBorders:{
    textAlign: 'center',
    width: width * .7,
    height:40,
    borderWidth:2,
    margin: 5,
    borderColor:'#ece9e1',
    borderRadius: 15,
    //backgroundColor:'transparent',
  },
  button: {
    width: width * .7,
    margin: 5,
    borderWidth: 4,
    borderColor:'#1e9c98',
    borderRadius: 20,
    padding: 5,
    //backgroundColor:'#1e9c98',
  },
  buttonText:{
    alignSelf:'center',
    color:'#1e9c98',
  },
  touchablehighlight:{
    borderRadius: 25,
  },
  headerText:{

  },
  placeholder:{
    fontFamily:'monospace',

  }
});

module.exports = commonstyles;
module.exports.constants = constants;
