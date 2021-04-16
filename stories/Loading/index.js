import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function Loading({ onPress, children }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Loading.defaultProps = {
  children: null,
  onPress: () => { },
};

Loading.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
