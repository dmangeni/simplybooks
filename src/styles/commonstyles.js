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
    width: width * .7,
    height: Platform.OS == 'android' ? 40 : 20,
    borderWidth:2,
    margin: 5,
    borderColor:'black',
    borderRadius: 15,
    //color: 'black',
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
    backgroundColor:'transparent',
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
