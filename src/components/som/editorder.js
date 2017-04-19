//@flow
import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Text, TextInput,
  StyleSheet,TouchableHighlight, TouchableOpacity,
  Image, Alert, ScrollView} from 'react-native';
import { Field, reduxForm } from 'redux-form';




const propTypes = {
  //authError: PropTypes.string.isRequired,
  //loading: PropTypes.bool.isRequired,
  //resetglobalStatus: PropTypes.func.isRequired,
};

class EditOrder extends Component {
  constructor(props){
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  resetglobalStatus(){
    //this.props.resetglobalStatus();
  }

  handleFormSubmit(props){
    //const { email, password } = props;
    //this.props.login({ email, password });
  }

  render(){

    //const fieldViewStyle = StyleSheet.flatten(loginstyles.fieldView)
    const {handleSubmit,valid, submitting} = this.props;

    return (

      <View>

      {/*}  <Image
          source = {require('../gallery/image4.jpeg')}
          style = {loginstyles.loginBackgroundImage}>*/}
        <ScrollView style={common.container} keyboardShouldPersistTaps={'handled'}>

          </ScrollView>
          {/*}{this.props.children}</Image>*/}
      </View>
    );
  }
}

EditOrder.propTypes = propTypes;
EditOrder = reduxForm({
  form: 'orderEdit',
  //validate: validate,
})(EditOrder);

export default EditOrder
