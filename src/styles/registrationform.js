import { Platform, StyleSheet, Dimensions,PixelRatio } from 'react-native';


let {height, width} = Dimensions.get('window');

const registrationstyles =  StyleSheet.create({
  container:{
    flex: 1,
    //backgroundColor:'#204557',
  },
  regform:{
    flex: 1,
    borderColor: '#edecec',
    borderWidth: 1,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 10,
    shadowOpacity: 20,
    alignItems: 'center',
  },
  navbar: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarText:{
    fontFamily: 'sans-serif-light',
    color: '#1e9c98',
    fontWeight: 'bold',
    fontSize: 30,
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
    flex: 0.3,
    //borderWidth: 2,
    //borderColor: 'black',
  },
  business:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 2,
    //borderColor: 'black',
  },
  headerText:{
    fontFamily: 'sans-serif-light',
    color: '#1e9c98',
    lineHeight: 7,
    padding: 10,
    alignSelf: 'center',
  },
  icon:{
    //position: 'absolute',
    //left: 20,
    //top: 3,
    width: width * 0.1,
    justifyContent:'center',
    alignItems: 'center',
    height: 35,
    borderColor: '#ccc2ca',
    borderWidth: 1,
    marginRight: 0,
  },
  inputWithIcons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
