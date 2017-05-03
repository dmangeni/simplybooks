/* eslint-disable import/prefer-default-export */
import React, { PropTypes } from 'react';
import { View } from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  //style: [],
};

/*const defaultProps = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};*/

const Item = props => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = {
  container: {
    margin: 2,
    /*padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',*/
    //margin: 2,
  },
};

//Item.defaultProps = defaultProps;
Item.propTypes = propTypes;

export default Item;
