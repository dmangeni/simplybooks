import React, {Component} from 'react';
import { View, ListView, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';

let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {

  },
  headerContainer:{
    marginTop: 2,
    marginRight:1,
    marginLeft: 1,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  headerView:{
    height: 25,
    justifyContent: 'center',
    padding: 2,
    borderWidth:2,
    margin: 1,
    borderColor: '#1e9c98',
    backgroundColor: '#1e9c98',
    alignItems: 'center',
  },
  headerText:{
    alignItems:'center',
    color: 'white',
  },
  rowContainer:{
    marginTop: 0,
    marginRight:1,
    marginLeft: 1,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    //borderColor: 'black',
    //borderWidth: 2,
  },
  row:{
    height: 25,
    justifyContent: 'center',
    padding: 2,
    borderWidth:2,
    margin: 1,
    borderColor: '#51cec9',
    backgroundColor: '#51cec9',
    alignItems: 'center',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

/*const ROWS_IN_DATA_SOURCE = 10;
const dataSource = [];

for (let i=0; i<ROWS_IN_DATA_SOURCE; i++){
  dataSource.push(`This is the data for row # ${i+1}`)
}*/

class RenderHeader extends Component {
  constructor(props) {
    super(props);
  }
  render(){

    let header = this.props

    return (
      <View style = {styles.headerContainer}>
        <View style = {[{flex: 0.4}, styles.headerView]}>
          <Text style = {styles.headerText}>
            { header[0] }
          </Text>
        </View>

        <View style = {[{flex: 0.20}, styles.headerView]}>
          <Text style = {styles.headerText}>
            { header[1] }
          </Text>
        </View>

        <View style = {[{flex: 0.20}, styles.headerView]}>
          <Text style = {styles.headerText}>
            { header[2] }
          </Text>
        </View>

        <View style = {[{flex: 0.20}, styles.headerView]}>
          <Text style = {styles.headerText}>
            { header[3] }
          </Text>
        </View>

      </View>
    )
  }
}

class RenderRow extends Component {
    constructor(props) {
      super(props);
    }
    render(){

      let tableData = this.props

      return (
        <View style = {[styles.rowContainer]}>
          <View style = {[{flex: 0.4}, styles.row]}>
            <Text style = {styles.headerText}>
              { tableData.productName }
            </Text>
          </View>

          <View style = {[{flex: 0.20}, styles.row]}>
            <Text style = {styles.headerText}>
              { tableData.price }
            </Text>
          </View>

          <View style = {[{flex: 0.20}, styles.row]}>
            <Text style = {styles.headerText}>
              { tableData.quantity }
            </Text>
          </View>

          <View style = {[{flex: 0.20}, styles.row]}>
            <Text style = {styles.headerText}>
              { tableData.quantity }
            </Text>
          </View>

        </View>
      )
    }
  }

class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerKeys: [
        'Product Name',
        'Price',
        'Quantity',
        'Total'
      ],
      tableData: {
        productName: "Banana",
        price: "12",
        quantity: "3",
      }
    }
  }

  render() {
    var tableData = []
    //let { tableData } = this.props

    return (
      <ScrollView>
        <View style = {styles.container}>
          <RenderHeader {...this.state.headerKeys}/>
          <RenderRow {...this.state.tableData}/>
        </View>
      </ScrollView>
    );
  }
}
export default ProductTable;
