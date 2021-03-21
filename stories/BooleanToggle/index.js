import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function BooleanToggle({ onPress, children }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

BooleanToggle.defaultProps = {
  children: null,
  onPress: () => { },
};

BooleanToggle.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
