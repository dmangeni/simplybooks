import { Platform, StyleSheet, Dimensions } from 'react-native';


let {height, width} = Dimensions.get('window');


const commonstyles =  StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
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
    width: width * .6,
    height: Platform.OS == 'android' ? 35 : 20,
    borderWidth:2,
    margin: 2,
    borderColor:'black',
    borderRadius: 15,
    //color: 'black',
    //backgroundColor:'transparent',
  },
  textInputWithoutBorders:{
    textAlign: 'center',
    width: width * .7,
    height: Platform.OS == 'android' ? 30 : 20,
    borderBottomWidth: 2,
    borderBottomColor: '#1e9c98',
    margin: 5,
    backgroundColor:'white',
    padding: 0,
    //borderColor:'#1e9c98',
    //borderRadius: 15,
  },
  button: {
    width: width * .7,
    margin: 5,
    borderWidth: 4,
    borderColor:'#1e9c98',
    borderRadius: 20,
    padding: 5,
    //backgroundColor:'#1e9c98',
    backgroundColor:'transparent',
  },
  buttonText:{
    alignSelf:'center',
    color:'#1e9c98',
    fontSize: 14,
    //fontFamily: 'sans-serif-light',
  },
  touchablehighlight:{
    borderRadius: 25,
  },
  headerText:{

  },
  placeholder:{
    fontFamily:'monospace',

  },
  error:{
    fontSize: 20,
    alignSelf: 'center',
    color: '#e62117',
    paddingTop: 20,
    paddingBottom: 10,
  },
});

module.exports = commonstyles;
