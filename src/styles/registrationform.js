import { Platform, StyleSheet, Dimensions,PixelRatio } from 'react-native';


let {height, width} = Dimensions.get('window');

const registrationstyles =  StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#006363',
  },
  regform:{
    flex: 1,
    alignItems: 'center',
    //borderColor: '#9fb8be',
    //borderWidth: 4,
    margin: 0.1 * width,
    backgroundColor: '#2e7572',
    //backgroundColor: '#33cccc'
  },
  personal:{
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
    //flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'flex-start', //cross-axis
  },

  headerView:{
    flex: 1, //Will occupy 1/5 of the parent container
    marginTop: 10,
  },
  personalcontent:{
    flex:4, //Will occupy the 4/5 of the parent container
  },
  business:{
    alignItems: 'center',
    flex: 3,

  },
  headerText:{
    fontFamily: 'sans-serif-thin',
    fontWeight: 'bold',
    color: '#ff8c31',
  },
  inputWithIcons:{
    flex: 2,
    flexDirection: 'row',
    position: 'relative',
  },
  icon:{
    position: 'absolute',
    left: 25,
    top: 15,
    fontSize: 25,
    color: 'white',
  },
  data: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777'
  },
  flags: {

  }
});

module.exports = registrationstyles;
