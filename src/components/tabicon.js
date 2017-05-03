import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => (
  <Text
    style={{ color: props.selected ? '#1e9c98' : '#ff8c31', fontFamily: 'sans-serif-light' }}
  >
    {props.title}
  </Text>
);

TabIcon.propTypes = propTypes;

export default TabIcon;
