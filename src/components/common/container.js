import React, { PropTypes } from 'react';
import { View } from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  style: {},
};

const Container = props => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
);


const Section = (props) => (

  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
)

const styles = {
  container: {
    flex: 1,
    /*elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    paddingTop: 10,
    paddingBottom: 10,*/
    padding: 10,
  },
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

module.exports = {
  Container, Section
}
