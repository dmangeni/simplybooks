import React, { PropTypes } from 'react';
import { View, ActivityIndicator } from 'react-native';

const propTypes = {
  size: PropTypes.string,
};

const defaultProps = {
  size: 'large',
  spinnerstyle: {}
};

const Spinner = ({ size, spinnerstyle }) => (
  <View style={[styles.spinnerStyle,spinnerstyle]}>
    <ActivityIndicator size={size} />
  </View>
);

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner
