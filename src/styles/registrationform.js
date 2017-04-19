import { Platform, StyleSheet, Dimensions,PixelRatio } from 'react-native';


let {height, width} = Dimensions.get('window');

const registrationstyles =  StyleSheet.create({
  container:{
    flex: 1,
    //backgroundColor:'#006363',
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'black',
  },
  regform:{
    flex: 1,
    //borderColor: '#9fb8be',
    //borderWidth: 2,
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    //backgroundColor: '#1e9c98',
    //backgroundColor: '#2e7572',
    //backgroundColor: '#33cccc'
    backgroundColor: 'black',
  },
  backgoundImage:{
    flex: 1,
    width: null,
    height: null,
    //alignSelf: 'stretch',
  },
  section:{
    flex: 1,
  },
  personal:{
    flex: 0.5,
    //borderWidth: 2,
    //borderColor: 'black',
  },
  business:{
    flex: 0.5,
    //borderWidth: 2,
    //borderColor: 'black',
  },
  headerText:{
    fontFamily: 'sans-serif-thin',
    fontWeight: 'bold',
    color: '#ff8c31',
    //color: 'white',
    padding: 10,
    alignSelf: 'center',
  },
  icon:{
    position: 'absolute',
    left: 25,
    top: 11,
    fontSize: 25,
    color: 'white',
  },
  inputContainer:{
    flex: 1,

  },
  data: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777'
  },
  regbutton:{
    backgroundColor: '#ff8c31',
  },
  flags: {
    width: width * 0.7,
  }
});

module.exports = registrationstyles;
